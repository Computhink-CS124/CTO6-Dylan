// write your codes here
let shapecolour='red';
function setup() {
    createCanvas(400,400);
    background(200);
    // noLoop(); // Stops continuous drawing
  }
let x1,y1,y2
function draw(){
    
    fill(shapecolour);
    if(mouseispressed){
      triangle()
    }
  }
function mousePressed(){
    shapecolour = color(random(255),random(255),random(255))
    
}
function mouseReleased(){
    shapecolour = color(random(255),random(255),random(255))
}
