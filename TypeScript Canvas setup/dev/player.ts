class Player {
    private game:Game
    private ctx:CanvasRenderingContext2D

    private x:number
    private y:number
    private width:number = 25
    private height:number = 50

    constructor(x:number,y:number,game:Game) {
        this.game = game
        this.ctx = this.game.ctx
        this.x = x
        this.y = y
    }

    public update():void {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.x, this.y-this.height, this.width, this.height)
    }
}