class Collission{
    constructor(collsion, mapWidth, player){
        this.collisionsMap = []
        this.boundaries = []
        this.player = player
        this.coliding = {
            up: false,
            down: false,
            right: false,
            left: false
        }

        for (let index = 0; index < collsion.length; index += mapWidth) {
            this.collisionsMap.push(collsion.slice(index, mapWidth + index))
        }
    }

    createBoundaries({width, height}, {x, y}){
        // this.collisionsMap.forEach((row, i)=>{
        //     row.forEach((item, j)=>{
        //         if(item != null && item != undefined && item != 0){
        //             this.boundaries.push(new Boundary({
        //                 position: {x: j * height + x, y: i * width + y},
        //                 size: {width, height}
        //             }))
        //         }   
        //     })
        // })
        this.boundaries.push(new Boundary({
            position: {x: 20* 48+ backgroundSprite.position.x, y: 20*48+ backgroundSprite.position.y},
            size: {width, height}
        }))
    }

    draw(){
        this.boundaries.forEach((boundarie)=>{
            boundarie.draw()

            this.checkIfColide(boundarie)
            
        })
    }

    checkIfColide(boundarie){
        // console.log('boundarie: '+boundarie.position.x+'\nPlayer: '+ this.player.position.x+'\nsize: '+(this.player.img_obj.width/4)/2)
        
            // this.player.position.y <= boundarie.position.y
        
            this.coliding.left = this.player.position.x <= boundarie.position.x +(this.player.img_obj.width/4)
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