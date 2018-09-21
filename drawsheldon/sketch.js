// Sheldon Drawing Simulator
// Meeka Fast (littleflexer)
// Sept 19th
//
// Extra for Experts:
// I used the mouseWheel() to change the size of Sheldon. After that, I threw in some spicy samba music to get a nice mood going while you DrawSheldon.
let shell;
let scaler;
let music;
let youngShell;
let bazinga;

function preload(){
  bazinga = loadImage("assets/bazinga.png")
  youngShell = loadImage("assets/young sheldon.png")
  shell = loadImage("assets/SHELDON-BIG-BANG-THEORY.png")
  music = loadSound("assets/Samba.wav")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scaler = 0.25
  music.setVolume(0.5)
  music.loop()
}

function draw() {
  if (keyIsPressed && keyCode === 32) {
   image(shell, mouseX, mouseY, shell.width * scaler , shell.height * scaler)

  }
  else if (keyIsPressed && keyCode === 66) {
    image(bazinga, mouseX, mouseY, bazinga.width * scaler , bazinga.height * scaler)
  }

  else if (keyIsPressed && keyCode === 86) {
    image(youngShell, mouseX, mouseY, youngShell.width * scaler , youngShell.height * scaler)
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

function playMusic() {
  music.play()
}

}
