System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, TiledMap, Label, tween, Vec3, Prefab, instantiate, UITransform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, TileScript;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      TiledMap = _cc.TiledMap;
      Label = _cc.Label;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac253m+E4FMpabxtLyhenLM", "TileScript", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("TileScript", TileScript = (_dec = ccclass('TileScript'), _dec2 = property(TiledMap), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec(_class = (_class2 = (_temp = class TileScript extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tileMap", _descriptor, this);

          _initializerDefineProperty(this, "playerOne", _descriptor2, this);

          _initializerDefineProperty(this, "playerTwo", _descriptor3, this);

          _initializerDefineProperty(this, "prefabLabel", _descriptor4, this);

          _initializerDefineProperty(this, "snake", _descriptor5, this);

          _initializerDefineProperty(this, "ladder", _descriptor6, this);

          _defineProperty(this, "tileLayer", null);

          _defineProperty(this, "tile", null);

          _defineProperty(this, "tileCurrPos", null);

          _defineProperty(this, "noOfSix", 0);

          _defineProperty(this, "playerOneTileX", 0);

          _defineProperty(this, "playerOneTileY", 0);

          _defineProperty(this, "playerTwoTileX", 0);

          _defineProperty(this, "playerTwoTileY", 0);

          _defineProperty(this, "playerOneinitialPos", null);

          _defineProperty(this, "playertwoInitialPos", null);
        }

        start() {
          this.tileLayer = this.tileMap.getLayer('Tile Layer 1');
          this.tileCurrPos = this.tileLayer.getTiledTileAt(0, 9, true).node.position;
          console.log('test   tttt');
          console.log(this.tileCurrPos);
          this.playerOne.setPosition(new Vec3(this.tileCurrPos.x + 8, this.tileCurrPos.y + 15, 0));
          this.playerTwo.setPosition(new Vec3(this.tileCurrPos.x + 25, this.tileCurrPos.y + 15, 0));
          tween(this.playerOne).to(1, {
            angle: 90
          });
          let k = 1;

          for (let i = 9; i >= 0; i--) {
            if (i % 2 == 0) {
              for (let l = 9; l >= 0; l--) {
                let ch = instantiate(this.prefabLabel);
                let tileNow = this.tileLayer.getTiledTileAt(l, i, true).node.position;
                ch.getComponent(Label).string = `${k++}`;
                this.tileMap.node.addChild(ch);
                ch.setPosition(tileNow.x + 10, tileNow.y - 8, 1);
              }
            } else {
              for (let j = 0; j <= 9; j++) {
                let ch = instantiate(this.prefabLabel);
                let tileNow = this.tileLayer.getTiledTileAt(j, i, true).node.position;
                ch.getComponent(Label).string = `${k++}`;
                this.tileMap.node.addChild(ch);
                ch.setPosition(tileNow.x + 10, tileNow.y - 8, 1);
              }
            }
          }

          let tileNowRandom1 = this.tileLayer.getTiledTileAt(0, 0, true).node.position;
          let tileNowRandom2 = this.tileLayer.getTiledTileAt(3, 3, true).node.position;
          let dist = Vec3.distance(tileNowRandom1, tileNowRandom2);
          console.log(dist);
          let chil = instantiate(this.ladder);
          this.tileMap.node.addChild(chil);
          chil.setPosition(tileNowRandom1.x + 50, tileNowRandom1.y - 28, tileNowRandom1.z);
          chil.getComponent(UITransform).setContentSize(28, dist + 50);
          let ang = Vec3.angle(tileNowRandom1, tileNowRandom2);
          tween(chil).to(1, {
            angle: ang * 100
          }).start();
          console.log('abc');
        }

        onLoad() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.movePlayer, this);
        }

        movePlayer() {
          // Math.floor(Math.random() * (max - min + 1)) + min;
          let diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          console.log(diceNumber); // let initialPosition = nodePlayer.getPosition();

          while (diceNumber > 0) {
            tween(this.playerOne).to(1, {
              position: new Vec3(this.playerOne.getPosition().x + 32 * diceNumber, this.playerOne.getPosition().y + 0, 0)
            }, {
              easing: 'sineIn'
            }).start();
            diceNumber = 0;
            console.log('inside while loop');
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tileMap", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerOne", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerTwo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prefabLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "snake", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ladder", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileScript.js.map