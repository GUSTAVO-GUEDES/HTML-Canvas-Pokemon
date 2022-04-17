class Sprite{
    constructor(src, cropPosition = null){
        const image = new Image()
        image.src = src

        this.img_obj = image

        this.cropPosition = cropPosition
        this.position = {}
    }

    draw(){
        !this.cropPosition?
            context.drawImage(
                this.img_obj,
                this.position.x, 
                this.position.y
            )
        :
            context.drawImage(
                this.img_obj,
                this.cropPosition.cropStartX, 
                this.cropPosition.cropStartY,
                this.cropPosition.cropEndX,
                this.cropPosition.cropEndY,
                this.position.x, 
                this.position.y,
                this.cropPosition.positionX,
                this.cropPosition.positionY
            )
    }

    moveSprite(direction, vel){
        switch(direction.toUpperCase()){
            case 'UP':
                this.position.y = this.position.y + vel
                break
            case 'LEFT':
                this.position.x = this.position.x + vel
                break
            case 'DOWN':
                this.position.y = this.position.y - vel
                break
            case 'RIGHT':
                this.position.x = this.position.x - vel
                break
        }
    }

    setPosition(pos){
        this.position = pos
    }

    setCropPosition(crop_pos){
        this.cropPosition = crop_pos
    }
}