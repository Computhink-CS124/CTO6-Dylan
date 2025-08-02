let colourValue = 0;

function setup() {
    createCanvas(800,400);
    background(220);
    // noLoop(); // Stops continuous drawing
  }

function draw() {
  // rect(50,width,100);
  // circle(width/2, height/2,100);
  // fill(100,100,100);
  let circlediameter = 30;
  let numOFCircles = 5;
  let totalwidth = circlediameter * numOFCircles;
  let startX = (width - totalwidth)/2 + circlediameter/2;
  for(let i = 0; i < numOFCircles; i++){
    let x = startX + i * circlediameter;
    ellipse (startX,height/2,circlediameter,circlediameter);

    }
  }





  // Recap 1: Repeating Circles}



