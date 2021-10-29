import type { GameObjects } from "phaser";


export abstract class Action{
    target:Phaser.GameObjects.GameObject
    source?:Phaser.GameObjects.GameObject
    constructor(target:Phaser.GameObjects.GameObject,source?:Phaser.GameObjects.GameObject){
        this.target = target;
        this.source = source;
    }
    
     
}

export class FireProjectileAction implements Action{
    target: GameObjects.GameObject;
    source?:GameObjects.GameObject
    constructor(prjectile,target:Phaser.GameObjects.GameObject,source?:Phaser.GameObjects.GameObject){
    
    }
    do() {
        throw new Error("Method not implemented.");
    }
}



export class SearchTargetAction implements Action{
    target: GameObjects.GameObject;
    source: GameObjects.GameObject;
    maxDistanceSq:integer=200**2;
    searc(possibleTargets:GameObjects.GameObject[]): void {
        for(let possibleTarget in possibleTargets){
            
        }
    }

}
export class DamageAction implements Action{

    target: GameObjects.GameObject;
    do() {
        //need to see how i cna implement a damageble component
    } 
}