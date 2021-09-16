
import { _decorator, Component, Node, TiledMap, Vec2, Label, UITransformComponent, TiledTile, TiledLayer, tween, Vec3, computeRatioByType, easing, Prefab, instantiate, size, SpriteFrame, UITransform } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TileScript
 * DateTime = Wed Sep 15 2021 11:44:38 GMT+0530 (India Standard Time)
 * Author = alokraj0024
 * FileBasename = TileScript.ts
 * FileBasenameNoExtension = TileScript
 * URL = db://assets/scripts/TileScript.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 */
 
@ccclass('TileScript')
export class TileScript extends Component {
    
    @property(TiledMap)
    tileMap : TiledMap = null;

    @property(Node)
    playerOne : Node = null;

    @property(Node)
    playerTwo : Node = null;

    @property(Prefab)
    prefabLabel : Prefab = null;

    @property(Prefab)
    snake : Prefab = null;

    @property(Prefab)
    ladder : Prefab = null;

    tileLayer : TiledLayer = null;
    tile : TiledTile = null;
    tileCurrPos : Vec3 = null;
    noOfSix : number = 0;
    playerOneTileX : number = 0;
    playerOneTileY : number = 0;
    playerTwoTileX : number = 0;
    playerTwoTileY : number = 0;
    playerOneinitialPos : Vec3 = null;
    playertwoInitialPos : Vec3 = null;

    start () {
        this.tileLayer = this.tileMap.getLayer('Tile Layer 1');
        this.tileCurrPos = this.tileLayer.getTiledTileAt(0,9,true).node.position;
        console.log('test   tttt');
        console.log(this.tileCurrPos);
        this.playerOne.setPosition(new Vec3(this.tileCurrPos.x+8,this.tileCurrPos.y+15,0));
        this.playerTwo.setPosition(new Vec3(this.tileCurrPos.x+25,this.tileCurrPos.y+15,0));
        tween(this.playerOne)
            .to(1,{angle : 90})
        let k = 1;
        for(let i = 9;i>=0;i--)
        {
            if(i%2==0)
            {
                for(let l=9;l>=0;l--)
                {
                    let ch = instantiate(this.prefabLabel);
                    let tileNow = this.tileLayer.getTiledTileAt(l,i,true).node.position;
                    ch.getComponent(Label).string = `${k++}`;
                    this.tileMap.node.addChild(ch);
                    ch.setPosition(tileNow.x+10,tileNow.y-8,1);
                }
            }
            else
            {
                for(let j=0;j<=9;j++)
                {
                    let ch = instantiate(this.prefabLabel);
                    let tileNow = this.tileLayer.getTiledTileAt(j,i,true).node.position;
                    ch.getComponent(Label).string = `${k++}`;
                    this.tileMap.node.addChild(ch);
                    ch.setPosition(tileNow.x+10,tileNow.y-8,1);
                }
            }
        }
        let tileNowRandom1 = this.tileLayer.getTiledTileAt(0,0,true).node.position;
        let tileNowRandom2 = this.tileLayer.getTiledTileAt(3,3,true).node.position;
        let dist = Vec3.distance(tileNowRandom1,tileNowRandom2);
        console.log(dist);
        let chil = instantiate(this.ladder);
        this.tileMap.node.addChild(chil);
        chil.setPosition(tileNowRandom1.x+50,tileNowRandom1.y-28,tileNowRandom1.z);
        chil.getComponent(UITransform).setContentSize(28,dist+50);
        let ang = Vec3.angle(tileNowRandom1,tileNowRandom2);
        tween(chil)
            .to(1,{angle : ang*100})
            .start();
        console.log('abc');
    }

    onLoad()
    {
        this.node.on(Node.EventType.MOUSE_DOWN, this.movePlayer,this)
    }
    movePlayer()
    {
        // Math.floor(Math.random() * (max - min + 1)) + min;
        let diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        console.log(diceNumber);
        // let initialPosition = nodePlayer.getPosition();
        while(diceNumber > 0)
        {
            tween(this.playerOne)
                .to(1,{position : new Vec3(this.playerOne.getPosition().x+(32*diceNumber),this.playerOne.getPosition().y+0,0)},{easing: 'sineIn'})
                .start();
            diceNumber = 0;
            console.log('inside while loop');
        }
    }

}