import { Subject } from 'rxjs'
import Player from '../Player';

const formation = { 
    gridW:4,
    gridH:4,
    distanceBetweenSoldiers:100,
    rotation:60
}

export class ControllableGroup{
    
    relative_coordinates:Array<Phaser.Math.Vector2> 
    groupCenter:Phaser.Math.Vector2
    controllableEntities:Array<ControllableEntity>;
    constructor(w:Phaser.Physics.Arcade.World,s:Phaser.Scene,posx:number,posy:number){
        this.relative_coordinates = [];
        this.controllableEntities = [];
        this.groupCenter = new Phaser.Math.Vector2(posx,posy) 
        for(let i = 0;i<formation.gridH;i++){
            for(let j = 0;j<formation.gridW;j++){
                let spawPosX = posx-i*formation.distanceBetweenSoldiers;
                let spawPosY = posy-j*formation.distanceBetweenSoldiers;
                let ce = new ControllableEntity(s, spawPosX,spawPosY, "characters", 2)
                this.controllableEntities.push(ce)
            }    
        }   
    }
    
    private assignPositionsToEntities(numberOfEntities:integer){

        
        for(let i = 0;i<formation.gridH;i++){
            for(let j = 0;j<formation.gridW;j++){
                
            }    
        }    
    }
}
export class ControllableEntity extends Phaser.Physics.Arcade.Image{ 

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

        
		// Physics
		this.scene.physics.world.enable(this);
		this.setImmovable(false);
		this.setScale(2);
		this.setCollideWorldBounds(true);
		this.scene.add.existing(this);
    }

    update_virtual(direction){
		this.setVelocity(direction.x,direction.y);
	}
}