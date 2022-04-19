class KeysMap{
    constructor({backgroud, foreground, player, collision, battleZone}){
        this.backgroud = backgroud
        this.player = player
        this.collision = collision
        this.foreground = foreground
        this.battleZone = battleZone

        window.addEventListener('keydown', ({key}) => {
            keys_map.activate(key)
        })
        
        window.addEventListener('keyup', ({key}) => {
            keys_map.deactivate(key)
        })

        this.keys = [
            {
                name:'w',
                pressed: false,
                action: (index) =>{
                    if(!collision.coliding.up){
                        this.collision.moveCollision('UP', this.player.speed)
                        this.battleZone.moveCollision('UP', this.player.speed)
                        this.backgroud.moveSprite('UP', this.player.speed)
                        this.foreground.moveSprite('UP', this.player.speed)
                    }      


                    this.player.img_obj.src = './img/Player/playerUp.png'
                    this.player.moving = true

                    var battleZoneColliding = this.battleZone.coliding.down === true
                    if(battleZoneColliding)
                        this.battleZone.tryBattle()
                }
            },
            {
                name:'a',
                pressed: false,
                action: (index) =>{
                   if(!collision.coliding.left){
                        this.collision.moveCollision('LEFT', this.player.speed)
                        this.backgroud.moveSprite('LEFT', this.player.speed)
                        this.battleZone.moveCollision('LEFT', this.player.speed)
                        this.foreground.moveSprite('LEFT', this.player.speed)
                    }

                    this.player.img_obj.src = './img/Player/playerLeft.png'
                    this.player.moving = true

                    var battleZoneColliding = this.battleZone.coliding.down === true
                    if(battleZoneColliding)
                        this.battleZone.tryBattle()
                }
            },
            {
                name:'s',
                pressed: false,
                action: (index) =>{
                    if(!collision.coliding.down){
                        this.collision.moveCollision('DOWN', this.player.speed)
                        this.backgroud.moveSprite('DOWN', this.player.speed)
                        this.battleZone.moveCollision('DOWN', this.player.speed)
                        this.foreground.moveSprite('DOWN', this.player.speed)
                    }

                    this.player.img_obj.src = './img/Player/playerDown.png'
                    this.player.moving = true

                    var battleZoneColliding = this.battleZone.coliding.down === true
                    if(battleZoneColliding)
                        this.battleZone.tryBattle()
                }
            },
            {
                name:'d',
                pressed: false,
                action: (index) =>{
                    if(!collision.coliding.right){
                        this.collision.moveCollision('RIGHT', this.player.speed)
                        this.backgroud.moveSprite('RIGHT', this.player.speed)
                        this.battleZone.moveCollision('RIGHT', this.player.speed)
                        this.foreground.moveSprite('RIGHT', this.player.speed)
                    }
                    
                    this.player.img_obj.src = './img/Player/playerRight.png'
                    this.player.moving = true

                    var battleZoneColliding = this.battleZone.coliding.down === true
                    if(battleZoneColliding)
                        this.battleZone.tryBattle()
                }
            },
        ]
    }

    search = (key) => {
        for (let i=0; i < this.keys.length; i++) {
            if (this.keys[i].name === key) {
                return this.keys[i];
            }
        }
        return null
    }

    activate = (key) =>{
        const activate_key = this.search(key)
        if (activate_key)
            activate_key.pressed = true
    }

    deactivate = (key) =>{
        const deactivate_key = this.search(key)
        if (deactivate_key)
            deactivate_key.pressed = false
    }

    getFirstActivate = () =>{
        for (let i=0; i < this.keys.length; i++) {
            if (this.keys[i].pressed === true) {
                return i;
            }
        }
        return null
    }

    runAction(index){
        if((index !== null && index !== undefined) || index == 0)
            this.keys[index].action(index)
    }
}