let block;
function setup() {
    createCanvas(windowWidth, windowHeight);
    block = new Block();
}

function draw() {
    background(204);
    block.display();

}

function mouseWheel(event) {
    block.x+=event.delta;
    redraw();
}