class Collission{
    constructor(collsion, mapWidth, player, batlleZone = false){
        this.collisionsMap = []
        this.boundaries = []
        this.player = player

        this.batlleZone = batlleZone

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

        // this.collisionsMap[20][25] = 1024
        // this.boundaries.push(new Boundary({
        //     position: {x: 25* 48+ backgroundSprite.position.x, y: 20*48+ backgroundSprite.position.y},
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

            var s = 1
            var j = -5

            if(this.player.position.y <= boundarie.position.y + boundarie.size.height + s &&
                this.player.position.y >= boundarie.position.y - boundarie.size.height && 
                this.player.position.x >= boundarie.position.x - boundarie.size.width + 20 &&
                this.player.position.x <= boundarie.position.x + boundarie.size.width -20
            )
                    up = true
    
            if(this.player.position.y <= boundarie.position.y + boundarie.size.height &&
                this.player.position.y >= boundarie.position.y - boundarie.size.height  - 12 && 
                this.player.position.x >= boundarie.position.x - boundarie.size.width + 20&&
                this.player.position.x <= boundarie.position.x + boundarie.size.width + j
            )
                left = true

            if(this.player.position.y <= boundarie.position.y + boundarie.size.height &&
                this.player.position.y >= boundarie.position.y - boundarie.size.height - 12 && 
                this.player.position.x >= boundarie.position.x - boundarie.size.width - j &&
                this.player.position.x <= boundarie.position.x + boundarie.size.width - 14
            )
                right = true
            
            if(!this.batlleZone){
                if(this.player.position.y <= boundarie.position.y + boundarie.size.height &&
                    this.player.position.y >= boundarie.position.y - this.player.img_obj.height - s && 
                    this.player.position.x >= boundarie.position.x - boundarie.size.width + 20&&
                    this.player.position.x <= boundarie.position.x + boundarie.size.width - 20
                )
                    down = true
            }else{
                if(this.player.position.y <= boundarie.position.y + boundarie.size.height - this.player.img_obj.height&&
                    this.player.position.y >= boundarie.position.y - this.player.img_obj.height - s && 
                    this.player.position.x >= boundarie.position.x - boundarie.size.width + 20&&
                    this.player.position.x <= boundarie.position.x + boundarie.size.width - 20  
                )
                    down = true
            }
        })


        // console.log(`Up: ${up}\nDown: ${down}\nLeft: ${left}\nRight: ${right}`)
        
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