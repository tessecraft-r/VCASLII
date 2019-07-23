let block;
let blockList=[];
let blockNum=10;
function setup() {
    createCanvas(windowWidth * 0.9, windowHeight * 0.9);
    rectMode(RADIUS);
    for(i=0;i<blockNum;i++){
        blockList[i] = new Block();
    }
}

function draw() {
    background(204);
    for(i=0;i<blockList.length;i++){
        blockList[i].display();
    }
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