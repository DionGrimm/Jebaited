"use strict";
var Game = (function () {
    function Game() {
        var _this = this;
        this.canvas = document.getElementById('cnvs');
        this.ctx = this.canvas.getContext("2d");
        this.gameLoop = function () {
            _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
            _this.fix_dpi(_this);
            _this.ctx.fillStyle = "black";
            _this.ctx.fillRect(0, 0, _this.width, _this.height);
            _this.player.update();
            _this.ctx.stroke();
            requestAnimationFrame(_this.gameLoop);
        };
        console.log("new game created!");
        this.dpi = window.devicePixelRatio;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(0, 100, this);
        requestAnimationFrame(this.gameLoop);
    }
    Game.prototype.collision = function (object, target) {
        if (object.x > target.x + 60 - object.width && object.x < target.x + target.width - 10 && object.y > target.y - object.height && object.y < target.y + target.height) {
            return true;
        }
        else {
            return false;
        }
    };
    Game.prototype.fix_dpi = function (game) {
        var style = {
            height: function () {
                return +getComputedStyle(game.canvas).getPropertyValue('height').slice(0, -2);
            },
            width: function () {
                return +getComputedStyle(game.canvas).getPropertyValue('width').slice(0, -2);
            }
        };
        game.canvas.setAttribute('width', style.width() * game.dpi + "px");
        game.canvas.setAttribute('height', style.height() * game.dpi + "px");
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Player = (function () {
    function Player(x, y, game) {
        this.width = 25;
        this.height = 50;
        this.game = game;
        this.ctx = this.game.ctx;
        this.x = x;
        this.y = y;
    }
    Player.prototype.update = function () {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y - this.height, this.width, this.height);
    };
    return Player;
}());
//# sourceMappingURL=main.js.map