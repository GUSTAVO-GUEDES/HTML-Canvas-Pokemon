const canvas = document.querySelector('canvas')
const BattleCanvasTransition = document.querySelector('#BattleCanvasTransition')
const BattleCanvasTransitionContext = BattleCanvasTransition.getContext('2d')
const context = canvas.getContext('2d')

canvas.width = 1025
canvas.height = 576

BattleCanvasTransition.width = 1025
BattleCanvasTransition.height = 576

context.fillStyle = 'white'
context.fillRect(0, 0, canvas.width, canvas.height)

const transition = new Transition(BattleCanvasTransitionContext, BattleCanvasTransition)

const backgroundSprite = new Sprite('./img/Pallet Town.png')
backgroundSprite.setPosition({x: -7*70, y: -17*43})

const foregroundSprite = new Sprite('./img/ForegroundPalletTown.png')
foregroundSprite.setPosition({x: -7*70, y: -17*43})

const player = new Player('./img/Player/playerDown.png', 4)

const PalletCollision = new Collission(pallet_town_collisions, 70, player)
PalletCollision.createBoundaries({width: 48,height: 48}, backgroundSprite.position)

const BattleZones = new BattleZone(battleZones, 70, player, true, transition)
BattleZones.createBoundaries({width: 48,height: 48}, backgroundSprite.position)

const keys_map = new KeysMap({backgroud: backgroundSprite, foreground: foregroundSprite,player, collision: PalletCollision, battleZone: BattleZones})

var lastTimestamp = 0
var lastTimestamp2 = 0
var TransitionCount = 0

var audio = new AudioClass()

const animate = () =>{
    var timestamp = Date.now()
    var delta = timestamp - lastTimestamp

    var timestamp2 = Date.now()
    var delta2 = timestamp2 - lastTimestamp2

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

        if(!transition.runAnimation){
        
            backgroundSprite.draw()
            PalletCollision.draw()
            BattleZones.draw()

            player.draw()
            player.moving = false

            foregroundSprite.draw()
        }
    }

    if(TransitionCount < transition.transitionBlocks.length-1 && transition.runAnimation){
        
        if (  delta > 1000 / 60 ) {
            lastTimestamp2 = timestamp2 - ( delta2 % (1000 / 60) )

            transition.draw(TransitionCount)
            TransitionCount += 2
        }
    }else{
        TransitionCount = 0
        lastTimestamp2 = 0
        transition.runAnimation = false
        BattleZones.inBattle = false
    }
}

window.onload = function(){
    player.setPlayerSpriteProps()

    animate()
}