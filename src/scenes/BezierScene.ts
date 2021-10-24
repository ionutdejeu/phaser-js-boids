
export class BezierScene extends Phaser.Scene {
    graphics:Phaser.GameObjects.Graphics;
    path:any;
    curve:Phaser.Curves.CubicBezier;
    constructor() {
		super("BezierScene"); // Name of the scene
	}

    init(){
        this.graphics = this.add.graphics();

        this.path = { t: 0, vec: new Phaser.Math.Vector2() };
    
        var startPoint = new Phaser.Math.Vector2(100, 500);
        var controlPoint1 = new Phaser.Math.Vector2(50, 100);
        var controlPoint2 = new Phaser.Math.Vector2(600, 100);
        var endPoint = new Phaser.Math.Vector2(700, 500);
    
        this.curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);
    
        this.tweens.add({
            targets: this.path,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(1, 0x00ff00, 1);
        this.graphics.strokePath();

        this.curve.draw(this.graphics);

        this.curve.getPoint(this.path.t, this.path.vec);

        this.graphics.fillStyle(0xff0000, 1);
        this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 16);
    }

}
	