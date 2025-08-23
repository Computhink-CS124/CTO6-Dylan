
let shapeSize = 5;


function setup(){
    createCanvas(3000,3000)
    background(220);
    noStroke();
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