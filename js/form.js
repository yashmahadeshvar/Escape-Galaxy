class Form{
    constructor(){
        this.button = createButton('PLAY');
		this.button.size(150);
		this.button.style('background-color','lightblue');
        this.title = createElement('h2');
        this.title.style("gold");
        
    }
    
    hide(){
        this.title.hide();
        this.button.hide();

    }

    display(){
        this.title.html("-Escape Galaxy-");
        this.title.position(displayWidth/2 - 100,50);

        this.button.position(displayWidth/2 - 30, displayHeight/2 - 100);
        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();

        });

    }
}