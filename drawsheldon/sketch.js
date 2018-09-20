// Sheldon Drawing Simulator
// Meeka Fast (littleflexer)
// Sept 19th
//
// Extra for Experts:
// I used the mouseWheel() to change the size of Sheldon
let shell;
let scaler;

function preload(){
  shell = loadImage("assets/SHELDON-BIG-BANG-THEORY.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scaler = 0.25
}

function draw() {
  if (keyIsPressed && keyCode === 32) {
   image(shell, mouseX, mouseY, shell.width * scaler , shell.height * scaler)

  }
  else if (keyCode === 88){
    background(255)
    image(shell, mouseX, mouseY, shell.width * scaler , shell.height * scaler)
  }

 }

function mouseWheel(event) {
  if (event.delta >0 && scaler < 1.5) {
    scaler *= 1.1;
  }
  else if (event.delta < 0 && scaler > 0.10) {
    scaler *= 0.9;
  }
  console.log(event);

}
