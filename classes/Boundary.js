class Boundary{
    constructor({position, size, context, fillStyle}){
        this.position = position
        this.size = size
        this.context = context
        this.fillStyle = fillStyle
    }

    draw(){
        this.context.fillStyle = this.fillStyle
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
    }
}