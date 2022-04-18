class Collission{
    constructor(collsion, mapWidth, player){
        this.collisionsMap = []
        this.boundaries = []
        this.player = player
        this.coliding = {
            down: false,
            up: false,
            right: false,
            left: false
        }

        for (let index = 0; index < collsion.length; index += mapWidth) {
            this.collisionsMap.push(collsion.slice(index, mapWidth + index))
        }
    }

    createBoundaries({width, height}, {x, y}){
        this.collisionsMap.forEach((row, i)=>{
            row.forEach((item, j)=>{
                if(item != null && item != undefined && item != 0){
                    this.boundaries.push(new Boundary({
                        position: {x: j * height + x, y: i * width + y},
                        size: {width, height}
                    }))
                }   
            })
        })
        // this.boundaries.push(new Boundary({
        //     position: {x: 20* 48+ backgroundSprite.position.x, y: 20*48+ backgroundSprite.position.y},
        //     size: {width, height}
        // }))
    }

    draw(){
        let up = false
        let right = false
        let left = false
        let down = false

        this.boundaries.forEach((boundarie)=>{
            boundarie.draw()

            if(this.player.position.y <= boundarie.position.y + boundarie.size.height + 5&&
                this.player.position.x >= boundarie.position.x - (this.player.img_obj.width/4) &&
                this.player.position.x <= boundarie.position.x + (this.player.img_obj.width/4) &&
                this.player.position.y >= boundarie.position.y
            )
                up = true

            if(this.player.position.y >= boundarie.position.y - this.player.img_obj.height +2&&
                this.player.position.y <= boundarie.position.y + this.player.img_obj.height/2 &&
                this.player.position.x >= boundarie.position.x &&
                this.player.position.x <= boundarie.position.x + (this.player.img_obj.width/4) +5
            )
                left = true

            if(this.player.position.x >= boundarie.position.x - (this.player.img_obj.width/4 +3)&&
                this.player.position.y >= boundarie.position.y - this.player.img_obj.height+2 &&
                this.player.position.y <= boundarie.position.y + this.player.img_obj.height/2 &&
                this.player.position.x <= boundarie.position.x
            )
                right = true

            if(this.player.position.y >= boundarie.position.y - this.player.img_obj.height && 
                this.player.position.x <= boundarie.position.x + (this.player.img_obj.width/4) &&
                this.player.position.x >= boundarie.position.x - (this.player.img_obj.width/4) &&
                this.player.position.y <= boundarie.position.y + boundarie.size.height
                )
                down = true
                
        })


        console.log(`Up: ${up}\nDown: ${down}\nLeft: ${left}\nRight: ${right}`)
        
        this.coliding.up = up
        this.coliding.down = down
        this.coliding.left = left
        this.coliding.right = right
    }
    
    moveCollision(direction, vel){
        switch(direction.toUpperCase()){
            case 'UP':
                this.boundaries.forEach(item =>{
                    item.position.y = item.position.y + vel
                })
                break
            case 'LEFT':
                this.boundaries.forEach(item =>{
                    item.position.x = item.position.x + vel
                })
                break
            case 'DOWN':
                this.boundaries.forEach(item =>{
                    item.position.y = item.position.y - vel
                })
                break
            case 'RIGHT':
                this.boundaries.forEach(item =>{
                    item.position.x = item.position.x - vel
                })
                break
        }
    }
}