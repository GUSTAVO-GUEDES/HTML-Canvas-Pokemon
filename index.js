const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1025
canvas.height = 576

context.fillStyle = 'white'
context.fillRect(0, 0, canvas.width, canvas.height)

const backgroundSprite = new Sprite('./img/Pallet Town.png')
backgroundSprite.setPosition({x: -545, y: -710})

const player = new Player('./img/Player/playerDown.png')

const PalletCollision = new Collission(pallet_town_collisions, 70, player)
PalletCollision.createBoundaries({width: 48,height: 48}, backgroundSprite.position)

const keys_map = new KeysMap({backgroud: backgroundSprite, player, collision: PalletCollision})


const animate = () =>{
    window.requestAnimationFrame(animate)

    backgroundSprite.draw()
    PalletCollision.draw()
    player.draw()

    let activate_key_index = keys_map.getFirstActivate()

    if((activate_key_index !== null && 
        activate_key_index !== undefined) ||
        activate_key_index == 0)
        keys_map.runAction(activate_key_index)
}

window.onload = function(){
    player.setPlayerSpriteProps()

    animate()
}