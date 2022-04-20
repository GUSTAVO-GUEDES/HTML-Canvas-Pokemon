class Player extends Mob{
    constructor(src, img_cells){
        super(src, null, null, null, img_cells, false)

        this.img_cells = img_cells
        this.frame = 0
    }
    setPlayerSpriteProps(){
        this.setPosition({
            x: canvas.width/2 - (this.img_obj.width/this.img_cells) /2, 
            y: canvas.height/2 - this.img_obj.height/2
        })

        this.setSpeed(4)

        this.cell_size = this.img_obj.width/this.img_cells

        this.setCropPosition({
            cropStartX: 0, 
            cropStartY: 2,
            cropEndX: this.cell_size,
            cropEndY: this.img_obj.height, 
            positionX: this.cell_size,
            positionY: this.img_obj.height
        })
    }
}