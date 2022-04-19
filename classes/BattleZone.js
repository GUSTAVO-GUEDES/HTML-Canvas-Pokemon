class BattleZone extends Collission{
    constructor(collsion, mapWidth, player, batlleZone){
        super(collsion, mapWidth, player, batlleZone)

        this.inBattle = false
    }
    tryBattle(){

        var random = Math.floor(Math.random() * 1000)

        if(random < 6){
            console.log(random)
            console.log('battle')
            this.inBattle = true
        }
    }
}