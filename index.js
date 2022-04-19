const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1025
canvas.height = 576

context.fillStyle = 'white'
context.fillRect(0, 0, canvas.width, canvas.height)

const backgroundSprite = new Sprite('./img/Pallet Town.png')
backgroundSprite.setPosition({x: -7*70, y: -17*43})

const foregroundSprite = new Sprite('./img/ForegroundPalletTown.png')
foregroundSprite.setPosition({x: -7*70, y: -17*43})

const player = new Player('./img/Player/playerDown.png', 4)

const PalletCollision = new Collission(pallet_town_collisions, 70, player)
PalletCollision.createBoundaries({width: 48,height: 48}, backgroundSprite.position)

const BattleZones = new BattleZone(battleZones, 70, player, true)
BattleZones.createBoundaries({width: 48,height: 48}, backgroundSprite.position)

const keys_map = new KeysMap({backgroud: backgroundSprite, foreground: foregroundSprite,player, collision: PalletCollision, battleZone: BattleZones})

var lastTimestamp = 0

const animate = () =>{
    var timestamp = Date.now()
    var delta = timestamp - lastTimestamp

    window.requestAnimationFrame(animate)

    if ( delta > 1000 / 120 ) {
        lastTimestamp = timestamp - ( delta % (1000 / 120) )

        if(!BattleZones.inBattle){
            let activate_key_index = keys_map.getFirstActivate()

            if((activate_key_index !== null && 
                activate_key_index !== undefined) ||
                activate_key_index == 0)
                keys_map.runAction(activate_key_index)
        }
        
        backgroundSprite.draw()
        PalletCollision.draw()
        BattleZones.draw()

        player.draw()
        player.moving = false

        foregroundSprite.draw()
    }
}

window.onload = function(){
    player.setPlayerSpriteProps()

    animate()
}