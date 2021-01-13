class Data{
    constructor(){
        this.input=createInput("")
        this.button=createButton("Play")

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide()
        this.title.hide();
    }
    display(){
        this.input.position(displayWidth/2-50,displayHeight/2+175)
        this.button.position(displayWidth/2+150,displayHeight/2+175)
        
        this.button.mousePressed(()=>{
            player.getcart();
            car5+=1;
            player.updatecarno(this.input.value())
            player.updatecar(car5)
            this.input.hide();
            this.button.hide();
        })
    }
}