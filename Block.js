class Block{
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.id = 1;
        this.name ="Block"
        this.kind = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.label = "Block";
        this.locked = false;
        this.focus = false;
        this.priority = 1;
        this.width = 100;
        this.height = 50;
    }
    display(){
        if(this.isOver(mouseX,mouseY)){
            stroke(255);
        }else{
            stroke(0);
        }
        fill('rgb(0,255,0)');
        rect(this.x, this.y, this.width, this.height, 20);
    }
    isOver(x,y){
        if (x > this.x - this.width && x < this.x + this.width && y > this.y - this.height && y < this.y + this.height ){
            return true;
        }
        return false;
    }
    mouseDragged(){

    }
    mousePressed(){
        if (this.isOver(mouseX,mouseY)){
            this.x += 10;
        }
    }
    mouseReleased(){

    }
}