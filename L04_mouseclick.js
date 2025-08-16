// write your codes here

let shapecolour='red';
function setup() {
    createCanvas(400,400);
    background(200);
    // noLoop(); // Stops continuous drawing
  }

  function draw(){
    ellipse(200,200,80,80);
    fill(shapecolour = color(random(255),random(255),random(255)));
    
  }
  
function mousePressed(){
    shapecolour = color(random(255),random(255),random(255))
}
function mouseReleased(){
    shapecolour = color(random(255),random(255),random(255))
}


