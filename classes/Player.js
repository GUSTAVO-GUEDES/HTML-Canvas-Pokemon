class Player extends Mob{
    constructor(src){
        super(src)
    }
    setPlayerSpriteProps(){
        this.setPosition({
            x: canvas.width/2 - (this.img_obj.width/4) /2, 
            y: canvas.height/2 - this.img_obj.height/2
        })

        this.setSpeed(4)

        this.setCropPosition({
            cropStartX: 0, 
            cropStartY: 0,
            cropEndX: this.img_obj.width/4,
            cropEndY: this.img_obj.height, 
            positionX: this.img_obj.width/4,
            positionY: this.img_obj.height
        })
    }
}