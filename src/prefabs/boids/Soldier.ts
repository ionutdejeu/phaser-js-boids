import { Subject } from 'rxjs'

const formation = { 
    gridW:4,
    gridH:4,
    distanceBetweenSoldiers:30,
    rotation:60
}

export class ControllableGroup extends Phaser.GameObjects.Container{
    
    relative_coordinates:Array<Phaser.Math.Vector2> 
    groupCenter:Phaser.Math.Vector2
    controllableEntities:Array<ControllableEntity>;
    nrOfControllableEntities:integer;
    collisionGroup:Phaser.Physics.Arcade.Group;
    formationContainer:Phaser.GameObjects.Container;
    arcadePhysicsBody:Phaser.Physics.Arcade.Body;
    constructor(scene: Phaser.Scene, x: number, y: number)
	{  
        super(scene,x,y)
        this.relative_coordinates = [];
        this.controllableEntities = [];
        this.collisionGroup = scene.physics.add.group({
			bounceX:1,
			bounceY:1,collideWorldBounds:true,
		});

        let formH = (formation.gridH-1)*30;
        let formW = (formation.gridW-1)*30;
        this.groupCenter = new Phaser.Math.Vector2(0,0)

          //  Create a Rectangle
        let rectangle = new Phaser.Geom.Rectangle(-formW,-formH,formH,formW);
        
        for(let i = 0;i<formation.gridH;i++){
            for(let j = 0;j<formation.gridW;j++){
                let spawPosX = i*formation.distanceBetweenSoldiers;
                let spawPosY = j*formation.distanceBetweenSoldiers;
                let position = new Phaser.Math.Vector2(spawPosX,spawPosY);
                //position.normalize();
                //position.rotate(Phaser.Math.DEG_TO_RAD*formation.rotation);
                //position.scale(200);
                //position.add(new Phaser.Math.Vector2(posx,posy));
                let point = new Phaser.Geom.Point();
                rectangle.getRandomPoint(point);
                var ce = new ControllableEntity(scene, position.x,position.y, "characters", 2)
                this.controllableEntities.push(ce)
                this.add(ce);


            }
        }   
        this.nrOfControllableEntities = this.controllableEntities.length;
        
        scene.physics.world.enable(this);
        
        //this.originX = 100;
        //this.setSize(400,400);
        this.arcadePhysicsBody = this.body as Phaser.Physics.Arcade.Body;
        this.arcadePhysicsBody.setCircle(formH,-formH/2,-formH/2);

        
        scene.add.existing(this);
    }
     
    update_virtual(direction:Phaser.Math.Vector2){
		if (direction.lengthSq()>0){
            this.arcadePhysicsBody.setVelocity(direction.x,direction.y);
            
        }
        else{
            this.arcadePhysicsBody.setVelocity(0,0);
        }
        
        let angle = this.computeAngle(direction)
        for(let i=0;i<this.nrOfControllableEntities;i++){
            this.controllableEntities[i].setAngle(angle);
        }

	}

    computeAngle(velocity) {
		var zeroPoint = new Phaser.Geom.Point(0, 0);
		var angleRad = Phaser.Math.Angle.BetweenPoints(zeroPoint, velocity);
		return Phaser.Math.RadToDeg(angleRad);
	};
    
    private assignPositionsToEntities(numberOfEntities:integer){

        
        for(let i = 0;i<formation.gridH;i++){
            for(let j = 0;j<formation.gridW;j++){
                
            }    
        }    
    }
}
export class ControllableEntity extends Phaser.GameObjects.Sprite{ 

    onGroupDirectionChanged:Subject<Phaser.Math.Vector2> = new Subject();
    speed:number;
    constructor(
		scene: Phaser.Scene,
		x: number,
		y: number,
		key: string,
		frame: number
	) {
		super(scene, x, y, key, frame);
		this.scene = scene;
		this.speed = 160;		 
    }
    
}