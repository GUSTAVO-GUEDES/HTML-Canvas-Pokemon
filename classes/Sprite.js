class Sprite{
    constructor(src, cropPosition = null, frame = null, cell_size = null, img_cells = 1){
        const image = new Image()
        image.src = src

        this.img_obj = image

        this.cropPosition = cropPosition
        this.position = {}

        this.frame = frame
        this.cell_size = cell_size
        this.img_cells = img_cells
        this.elapsed = 0

        this.moving = false
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
                this.cell_size *this.frame+0.5, 
                this.cropPosition.cropStartY,
                this.cropPosition.cropEndX,
                this.cropPosition.cropEndY,
                this.position.x, 
                this.position.y,
                this.cropPosition.positionX,
                this.cropPosition.positionY
            )

        if(this.moving){
            this.elapsed++

            if(this.elapsed % 10 === 0 ){
                if(this.frame < this.img_cells-1)
                    this.frame++
                else
                    this.frame = 0
            
            }
        }else{
            this.frame = 0
        }
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