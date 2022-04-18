class Boundary{
    constructor({position, size}){
        this.position = position
        this.size = size
    }

    draw(){
        context.fillStyle = 'transparent'
        context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
    }
}