import Phaser from "phaser";
import VirtualJoyStick from "../prefabs/VirtualJoyStick";

 
export const VirtualJoystickSceneKey={
  key:'ScrollContainerDemoScene'
}
export class VirtualJoyStickDemoScene extends Phaser.Scene {
    virtualJoyStick:VirtualJoyStick;
    constructor() {
    super(VirtualJoystickSceneKey);
  }
  
  preload():void{
     
  }
  create(): void {
    this.virtualJoyStick = new VirtualJoyStick(this,100,100,"daw",0xFFFFFF);
    this.input.setDraggable(this.virtualJoyStick);
    this.virtualJoyStick.onClick().subscribe(()=>{
        console.log('pressed')
    })

  }

}
