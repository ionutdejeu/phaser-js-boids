import Phaser from "phaser";


export class CircularHealthBar{ 
    bar:Phaser.GameObjects.Graphics;
    x:number;
    y:number;
    value:number;
    p:number;
    constructor (scene:Phaser.Scene, x:number, y:number)
    {
        this.bar = new Phaser.GameObjects.Graphics(scene);
        this.x = x;
        this.y = y;
        this.value = 100;
        this.p = 360 / 100;
        this.draw();
        scene.add.existing(this.bar);
    }
  
    decrease (amount:number)
    {
        this.value -= amount;
  
        if (this.value < 0)
        {
            this.value = 0;
        }
  
        this.draw();
  
        return (this.value === 0);
    }
    setValue(amount:number){
      this.value = amount;
      this.draw();
      return (this.value === 0);
    }
  
    draw ()
    {
        this.bar.clear();
        let d = Math.floor(this.p * this.value);
        // // BG
        // this.bar.lineStyle(2, 0xffffff);
        // this.bar.beginPath();
        // this.bar.arc(this.x, this.y, 52, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), true, 0.02);
        // this.bar.strokePath();
        // this.bar.closePath();
  
        // Health
        this.bar.beginPath();
        if (this.value < 30)
        {
            this.bar.fillStyle(0xff0000);
            this.bar.lineStyle(20, 0xff0000);
        }
        else
        {
            this.bar.fillStyle(0x00ff00);
            this.bar.lineStyle(20, 0x00ff00);
        }  
        this.bar.arc(this.x, this.y, 50, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(d), true, 0.02);
        this.bar.strokePath();
        this.bar.closePath();
  
        
    }
  
  }