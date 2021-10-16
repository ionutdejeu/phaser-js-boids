import type Phaser from "phaser";


export default class SpriteButton{

    scene:Phaser.Scene
    sprite:Phaser.GameObjects.Sprite;
    constructor(scene:Phaser.Scene,posX:number,posY:number,resourceKey:string){
        this.scene =scene;
        this.sprite = this.scene.add.sprite(posX, posY, resourceKey).setInteractive();
        this.sprite.on('pointerover', (event)=> {
        },this);    
        this.sprite.on('pointerout',(event)=>{
        },this);
    }   
}