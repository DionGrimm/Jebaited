 class Game { // Declare all the stuff
    private canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('cnvs')
    public ctx:CanvasRenderingContext2D = this.canvas.getContext("2d")!
    private dpi:number
    private width:number
    private height:number
    private player:Player

    constructor() { // Load in all the stuff
        console.log("new game created!")
        //this.canvas.style.width = window.innerWidth+"px"
        //this.canvas.style.height = window.innerHeight+"px"
        this.dpi = window.devicePixelRatio
        this.width = this.canvas.width
        this.height = this.canvas.height
        //console.log(this.height)
        this.player = new Player(0,100,this)

        // Start looping stuff
        requestAnimationFrame(this.gameLoop)
    }

    gameLoop = ():void => {
        // Draw setup
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.fix_dpi(this)
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0,0,this.width,this.height)
        // Update stuff
        this.player.update()
        // Draw 
        this.ctx.stroke()
        // Next frame
        requestAnimationFrame(this.gameLoop)
     }


    // Collision function
    public collision(object:any, target:any):boolean {
        if (object.x > target.x+60-object.width && object.x < target.x+target.width-10 && object.y > target.y-object.height && object.y < target.y+target.height) {
            return true
        } else {
            return false
        }
    }

    private fix_dpi(game:Game):void {
    //create a style object that returns width and height
    
        let style = {
            height():number {
                return +getComputedStyle(game.canvas).getPropertyValue('height').slice(0,-2);
            },
            width():number {
                return +getComputedStyle(game.canvas).getPropertyValue('width').slice(0,-2);
            }
        }
    
    //set the correct attributes for a crystal clear image!
    
        game.canvas.setAttribute('width', style.width() * game.dpi + "px");
        game.canvas.setAttribute('height', style.height() * game.dpi + "px");
    }
}

// Create the game instance
window.addEventListener("load", () => new Game())