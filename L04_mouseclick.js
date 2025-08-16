// write your codes here
let shapecolor='blue';
function setup() {
    createCanvas(400,400);
    background(200);
    // noLoop(); // Stops continuous drawing
  }
  function draw(){
    ellipse(200,200,80,80)
    fill(shapecolor)
  }
function mousepressed(){
    shapecolor='red';
}
function mouseReleased(){
    shapecolor = 'blue';
}