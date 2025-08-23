
let shapeSize = 5;


function setup(){
    createCanvas(600,400)
    background(220);
}
function draw() {


}
function mouseDragged () {
    shapeSize += 0.3;
    ellipse(mouseX,mouseY,shapeSize,shapeSize)

}
function mousePressed () {
    fill(random(255),random(255),random(255));
    shapeSize = 5;

}