let block;
let blockList=[];
let blockNum=10;
function setup() {
    createCanvas(windowWidth, windowHeight);
    for(i=0;i<blockNum;i++){
        blockList[i] = new Block();
    }
}

function draw() {
    background(204);
    for(i=0;i<blockNum;i++){
        blockList[i].display();
    }
}
function mousePressed(){
    for(i=0;i<blockNum;i++){
        blockList[i].mousePressed();
    }
}