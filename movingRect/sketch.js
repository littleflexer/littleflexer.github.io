// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth,windowHeight);
  alert("WARNING: flashing colors")
}

function draw() {
  for (let i=0; i< width; i+=5){
    for(let j =0; j<height; j+=5){
      fill(int(random(255)), int(random(255)), int(random(255)));
      noStroke();
      rect(i, j, 5, 5)
    }
  }

}
