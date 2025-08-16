// write your codes here
let shapeColor = 'blue';
let x1,y1,x2,y2,x3,y3
let circleSize = 20
function setup(){
createCanvas(400,400)
background(200);
}

function draw(){
fill(shapeColor);
if(mouseispressed){
  triangle(x1,y1,x2,y2,x3,y3)
}
}

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
  shapeColor = color(random(255), random(255),random(255))
  fill(shapeColor);
  circleSize = random(10,10)
  ellipse(mouseX,mouseY,circleSize,circleSize)
  
  


}