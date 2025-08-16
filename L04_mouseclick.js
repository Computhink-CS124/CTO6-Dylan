// write your codes here
let shapeColor ='blue';
let circleSize = 20
function setup(){
createCanvas(400,400)
background(200);
}

// function draw(){
// fill(shapeColor);
// ellipse(200,200,80,80)
// ellipse(mousX,mouseY,circleSize,circleSize)
// }

function mousePressed(){
shapeColor = color(random(255), random(255),random(255))
circlesize += 20;
}

function mouseReleased(){
shapeColor = color(random(255), random(255),random(255))
}
function mouseMoved(){
  circlesize+=2;
}
function mouseDragged(){
  fill(shapeColor);
  ellipse(mouseX,mouseY,circleSize,circleSize)



}