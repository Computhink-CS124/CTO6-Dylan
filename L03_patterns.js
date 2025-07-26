

function setup() {
    createCanvas(600,400);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
  let spacing = 120;
for (let i = 0; i < 5; i++){
  circle(spacing + i * spacing,100,40);
  fill(colourValue);
  colourValue +=1;
}
  // Recap 1: Repeating Circles}



}