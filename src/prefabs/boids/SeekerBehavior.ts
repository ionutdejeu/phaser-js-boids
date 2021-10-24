
import { Subject } from 'rxjs'

export class SeekerBehavior extends Phaser.Physics.Arcade.Image {
	public id:integer;

    private SeekTargetChanged: Subject<Phaser.Input.Pointer> = new Subject();
    
    constructor(scene, x, y, key, frame) {
		super(scene, x, y, key, frame);
		this.scene = scene;

        // Physics
		this.scene.physics.world.enable(this);
		this.scene.add.existing(this);
    }

    public update(){
         
    }
}