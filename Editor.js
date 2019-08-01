class Editor{
    constructor(){
        this.x=0;
        this.y=0;
        this.width=500;
        this.height = windowHeight;
    }
    display(){
        rect(this.x,this.y,this.width,this.height);
        
    }
}