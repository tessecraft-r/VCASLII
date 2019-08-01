class Block{
    constructor(label, swidth = 60, sheight = 17) {
        this.x = random(width);
        this.y = random(height);
        this.id = 1;
        this.name ="Block"
        this.kind = 1;
        this.dragOffsetX = 0;
        this.dragOffsetY = 0;
        this.label = label;
        this.locked = false;
        this.focus = false;
        this.priority = 1;
        this.width = swidth;
        this.height = sheight;
        this.textSize = 15;
        this.borderRadius = 20;
    }

    display(){
        var over = this.isOver(mouseX,mouseY);

        fill(over ? 'rgb(0, 128, 255)' : 'rgb(255, 255, 255)');
        stroke(over ? 'rgb(7, 43, 79)' : 'rgb(7, 43, 79)');
        rect(this.x, this.y, this.width, this.height, this.borderRadius);

        textSize(this.textSize);
        textAlign(RIGHT, CENTER);
        fill(over ? 'rgb(255, 255, 255)' : 'rgb(7, 43, 79)');
        stroke(over ? 'rgb(0, 128, 255)' : 'rgb(255, 255, 255)');
        text(this.label, this.x , this.y);

        /*
        // ドラッグ時のオフセットデバッグ
        stroke('red');
        line(this.x, this.y, this.x + this.dragOffsetX, this.y + this.dragOffsetY );
        */
    }

    isOver(x,y){
        if (x > this.x - this.width && x < this.x + this.width &&
            y > this.y - this.height && y < this.y + this.height ){
            return true;
        }
        return false;
    }

    mouseDragged(){
        if (this.locked) {
            this.x = -this.dragOffsetX + mouseX;
            this.y = -this.dragOffsetY + mouseY;
          }
    }

    mousePressed(){
        if (this.isOver(mouseX,mouseY)){
            // Click時にだけオフセット記録。
            // TODO:Clickイベント作ったほうがいい？
            if(!this.locked){
                this.dragOffsetX = mouseX - this.x;
                this.dragOffsetY = mouseY - this.y;
            }
            this.locked = true;
        }
    }

    mouseReleased(){
        if(this.isLocked() == true){
            this.locked = false;
            return this
        }
        this.locked = false;
        return false
    }

    isLocked(){
        return this.locked;
    }
}
class LDBlock extends Block{
    constructor(swidth = 60, sheight = 17){
        super("LD",swidth,sheight);
    }
}
class LADBlock extends Block{
    constructor(swidth = 60, sheight = 17){
        super("LAD",swidth,sheight);
    }
}