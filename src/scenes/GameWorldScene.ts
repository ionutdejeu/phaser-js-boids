import Phaser from "phaser";
 
export const GameWorldSceneKey={
  key:'GameWorldScene'
}
export class GameWorldScene extends Phaser.Scene {
    constructor() {
    super(GameWorldSceneKey);
  }
  
  preload():void{
      console.log("game World loaded")
     
  }
  create(): void {
    
  }
}
