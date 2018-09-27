// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let dx;
let rectWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  dx = 5;
  rectWidth = 200;

}
function draw() {
  background(125, 0, 0);

  //move rectangle
  x += dx
  //check if wall has been hideControls
  if (x > width - rectWidth || x < 0) {
    dx = dx * -1
  }

  //display rectqngle
  fill(0,125,0);
  rect(x,400,200,150);
}
