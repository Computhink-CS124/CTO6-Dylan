

function setup() {
    createCanvas(10000,10000);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
for (let i = 1; i < 5; i++){
  circle(50 + i * 50,100,40);
  fill(i*80,i*80,i*80);
}
  // Recap 1: Repeating Circles}



}