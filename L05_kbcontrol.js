
let shapeSize = 5


function setup(){
createCanvas(600,400)
background(200);
}

function mousePressed () {
    shapeSize + 0.5
    ellipse(mouseX,mouseY)
}