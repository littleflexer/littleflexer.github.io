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
  alert("How to play Draw Sheldon: \n Hold space bar to draw and 'X' to reset. This will draw with Sheldon's beautiful face. \n Use the mouse wheel to change the size. Scroll up for small and down for large. \n Quickly click 'B' (while holding space) to draw with the text BAZINGA. \n Quickly click 'V'(while holding space) to draw with young Sheldon. \n To stamp bazinga or young sheldon, you'll want to hold down either 'B' or 'V' ,depending on what you want to stamp, and move your curser to the desired location. \n REMEMBER A normal Sheldon face is your default drawing tool.")
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
