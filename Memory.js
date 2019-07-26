class Memory{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.offsetX = 0;
        this.offsetY = 0;
        this.addressRow = [];
        this.valueRow = [];
        this.block = new AddressBlock(0,0,0);
        this.width = this.block.width*4;
        this.height = 500;

        for(var i=0;i<0xffff;i++){
            this.addressRow[i] = new AddressBlock(this.toHex(i),this.x,this.y+this.block.height*2*i);
            this.valueRow[i] = new ValueBlock("0000",this.x+this.block.width*2, this.y+this.block.height*2*i)
        }
    }
    display(){
        
        for(var i=0;i<this.addressRow.length;i++){
            //メモリ一覧を出す際メモリー全体ののwidthとheightの範囲のみ表示させる
            if(this.height - this.y < this.addressRow[i].y && this.height + this.y > this.addressRow[i].y){
                this.addressRow[i].visible = true;
                this.valueRow[i].visible = true;
                this.addressRow[i].display();
                this.valueRow[i].display();
            }else{
                this.addressRow[i].visible = false;
                this.valueRow[i].visible = false;
            }
        }
    }
    setValue(addr,label){
        this.valueRow[addr] = label;
    }
    toHex(v) {
        return '0x' + (('0000' + v.toString(16).toUpperCase()).substr(-4));
    }
    mouseWheel(event){
        if(this.isOver(mouseX,mouseY)){
            for(var i=0;i<this.addressRow.length;i++){
                this.addressRow[i].y += event.delta;
                this.valueRow[i].y += event.delta;
            }
        }
    }
    isOver(x,y){
        if (x > this.x - this.width && x < this.x + this.width){
            return true;
        }
        return false;
    }
}
class AddressBlock{
    constructor(label,x,y){
        this.x = x;
        this.y = y;
        this.offsetX = 0;
        this.offsetY = 0;
        this.label = label;
        this.width = 50;
        this.height = 10;
        this.visible = false;
    }
    setAddressLabel(label){
        this.label = label;
    }
    display(){
        stroke('rgb(7, 43, 79)');
        fill(255);
        rect(this.x, this.y, this.width, this.height);
        textSize(this.textSize);
        textAlign(CENTER, CENTER);
        stroke('rgb(0, 128, 255)');
        text(this.label, this.x , this.y);
    }
}
class ValueBlock{
    constructor(label,x,y){
        this.x = x;
        this.y = y;
        this.offsetX = 0;
        this.offsetY = 0;
        this.label = label;
        this.width = 50;
        this.height = 10;
        this.visible = false;
    }
    setValueLabel(label){
        this.label = label;
    }
    display(){
        stroke('rgb(7, 43, 79)');
        fill(255);
        rect(this.x, this.y, this.width, this.height);
        textSize(this.textSize);
        textAlign(CENTER, CENTER);
        stroke('rgb(0, 128, 255)');
        text(this.label, this.x , this.y);
    }
}