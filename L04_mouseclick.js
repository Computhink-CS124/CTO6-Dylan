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
if(mouseIsPressed){
  triangle(x1,y1,x2,y2,x3,y3)
}
}

function mousePressed(){
shapeColor = color(random(255), random(255),random(255))
x1=random(width);
x2=random(width);
x3=random(width);
y1=random(height);
y2=random(height);
y3=random(height);


}

function mouseReleased(){
shapeColor = color(random(255), random(255),random(255))
}

x1=random(width);
x2=random(width);
x3=random(width);
y1=random(height);
y2=random(height);
y3=random(height);

