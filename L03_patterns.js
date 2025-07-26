

function setup() {
    createCanvas(600,400);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
  let spacing = 50;
for (let i = 1; i < 5; i++){
  circle(50 + i * 50,100,40);
  fill(i*80,i*80,i*80);
}
  // Recap 1: Repeating Circles}



}