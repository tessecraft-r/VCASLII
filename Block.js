class Block{
    constructor() {
        this.x = random(width);
        this.y = random(height);
    }
    display(){
        fill('rgb(0,255,0)');
        rect(this.x, this.y, 55, 55, 20);
    }
}