class AudioClass {
    constructor(){
        this.audioInstance = new Audio('./sounds/pallet_theme.mp3')
        this.colisionAudioInstance = new Audio('./sounds/collision.mp3')
    }

    play(){
        this.audioInstance.play()
    }

    pause(){
        if(!this.audioInstance.paused)
            this.audioInstance.pause()
    }

    paused(){
        return this.audioInstance.paused
    }

    volume(vol){
        this.audioInstance.volume = vol
    }

    battleTheme(){
        this.pause()
        this.audioInstance = new Audio('./sounds/battle_theme.mp3')
        this.volume(0.1)
        this.play()

        setTimeout(() =>{
            this.palletTheme()
        }, 5000)
    }

    palletTheme(){
        this.pause()
        this.audioInstance = new Audio('./sounds/pallet_theme.mp3')
        this.volume(0.1)
        this.play()
    }

    collision(){
        if(this.colisionAudioInstance.paused){
            this.colisionAudioInstance = new Audio('./sounds/collision.mp3')
            this.colisionAudioInstance.volume = 0.3
            this.colisionAudioInstance.play()
        }
    }
}