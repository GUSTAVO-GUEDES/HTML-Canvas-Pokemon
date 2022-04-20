class Transition{
    constructor(context, canvas){
        this.context = context
        this.canvas = canvas

        this.elapsed = 0

        this.x = 0
        this.y = this.canvas.height - 48

        this.runAnimation = false

        this.transitionBlocks = []

        for(var i=0; i<this.canvas.width; i+=48){
            for(var j=0; j<this.canvas.height+48; j+=48){
                this.transitionBlocks.push(new Boundary({
                    position: {x: i-2, y: j-2},
                    size: {width: 48, height: 48},
                    context: this.context,
                    fillStyle: 'transparent'
                }))
            }
        }
    }

    draw(TransitionConunt){
        this.transitionBlocks[TransitionConunt].fillStyle = 'black'
        this.transitionBlocks[TransitionConunt].draw()

        this.transitionBlocks[TransitionConunt+1].fillStyle = 'black'
        this.transitionBlocks[TransitionConunt+1].draw()
    }

    animateTransition(){
        this.runAnimation = true
    }
}