let block;
let blockList=[];
let blockNum=10;
let memory;
function setup() {
    createCanvas(windowWidth * 0.9, windowHeight * 0.9);
    rectMode(RADIUS);
    for(i=0;i<blockNum;i++){
        blockList[i] = new Block("Block" + i);
    }
    memory = new Memory();
}

function draw() {
    background(204);
    blockList.forEach(function(block){
        block.display();
    });
    memory.display();
}
function mousePressed(){
    blockList.some(function(block){
        block.mousePressed();
        return block.isLocked();
    });
}
function mouseDragged(){
    blockList.forEach(function(block){
        block.mouseDragged();
    });
}
function mouseReleased(){
    blockList.forEach(function(block){
        block.mouseReleased();
    });
}
function mouseWheel(event) {
    memory.mouseWheel(event);
}