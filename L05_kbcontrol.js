let shapeColor = "blue"
let shapeSize = 5


function setup(){
createCanvas(600,400)
background(200);
}

function mouseDragged () {
    shapeSize += 0.5;
    ellipse(mouseX,mouseY,shapeSize,shapeSize)
}
function mouseReleased () {
    shapeColor = (random(255),random(255),random(255))
}