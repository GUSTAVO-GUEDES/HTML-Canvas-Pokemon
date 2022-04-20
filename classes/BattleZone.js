class BattleZone extends Collission{
    constructor(collsion, mapWidth, player, batlleZone, transition){
        super(collsion, mapWidth, player, batlleZone)

        this.inBattle = false
        this.transition = transition
    }
    tryBattle(){

        var random = Math.floor(Math.random() * 1000)

        if(random < 6){
            console.log(random)
            console.log('battle')
            this.inBattle = true

            transition.animateTransition()
        }
    }
}