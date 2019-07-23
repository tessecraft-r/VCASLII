let block;
let blockList=[];
let blockNum=10;
let memory;
function setup() {
    createCanvas(windowWidth * 0.9, windowHeight * 0.9);
    rectMode(RADIUS);
    for(i=0;i<blockNum;i++){
        blockList[i] = new Block();
    }
    memory = new Memory();
}

function draw() {
    background(204);
    for(i=0;i<blockList.length;i++){
        blockList[i].display();
    }
    memory.display();
}
function mousePressed(){
    for(i=0;i<blockList.length;i++){
        blockList[i].mousePressed();
    }
}
function mouseDragged(){
    for(i=0;i<blockList.length;i++){
        blockList[i].mouseDragged();
    }
}
function mouseReleased(){
    for(i=0;i<blockList.length;i++){
        blockList[i].mouseReleased();
    }
}
function mouseWheel(event) {
    memory.mouseWheel(event);
  }