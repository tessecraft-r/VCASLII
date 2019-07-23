class Block{
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.id = 1;
        this.name ="Block"
        this.kind = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.label = "LD";
        this.locked = false;
        this.focus = false;
        this.priority = 1;
        this.width = 40;
        this.height = 25;
        this.textSize = 20;
    }
    display(){
        if(this.isOver(mouseX,mouseY)){
            stroke(255);
        }else{
            stroke(0);
        }
        fill('rgb(0,255,0)');
        rect(this.x, this.y, this.width, this.height, 20);
        textSize(this.textSize);
        textAlign(RIGHT, CENTER);
        text(this.label, this.x , this.y);
    }
    isOver(x,y){
        if (x > this.x - this.width && x < this.x + this.width && y > this.y - this.height/2 && y < this.y + this.height ){
            return true;
        }
        return false;
    }
    mouseDragged(){
        if (this.locked) {
            this.x = mouseX - this.offsetX;
            this.y = mouseY - this.offsetX;
          }
    }
    mousePressed(){
        if (this.isOver(mouseX,mouseY)){
            this.locked = true;
        }else{
            this.locked = false;
        }
        this.offsetX = mouseX - this.x;
        this.offsetY = mouseY - this.y;
    }
    mouseReleased(){
        this.locked = false;
    }
}