// Sheldon Drawing Simulator
// Meeka Fast (littleflexer)
// Sept 19th
//
// Extra for Experts:
// I used the mouseWheel() to change the size of Sheldon. After that, I threw in some spicy samba music to get a nice mood going while you DrawSheldon.
let shell;  //these are my varibles
let scaler;
let music;
let youngShell;
let bazinga;
let appartment;
let hallway;
let kitchen;
let whichBackground;
let gameStart;

function preload(){ //I use the preload to set up everything saved in the assets folder
  bazinga = loadImage("assets/bazinga.png")
  youngShell = loadImage("assets/young sheldon.png")
  shell = loadImage("assets/SHELDON-BIG-BANG-THEORY.png")
  appartment = loadImage("assets/Sheldonappartment.jpg")
  hallway = loadImage("assets/big bang theaory hallway.jpg")
  kitchen = loadImage("assets/bbt kitchen.jpg")
  music = loadSound("assets/Samba.wav")
  gameStart = millis()

}

function setup() { //this sets up the canvas, music, and mousewheel
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scaler = 0.25
  music.setVolume(0.5)
  music.loop()
  alert("How to play Draw Sheldon: \n Hold space bar to draw and 'X' to reset. This will draw with Sheldon's beautiful face. \n Use the mouse wheel to change the size. Scroll up for small and down for large. \n Quickly click 'B' (while holding space) to draw with the text BAZINGA. \n Quickly click 'V'(while holding space) to draw with young Sheldon. \n To stamp bazinga or young sheldon, you'll want to hold down either 'B' or 'V' ,depending on what you want to stamp, and move your curser to the desired location. \n REMEMBER A normal Sheldon face is your default drawing tool. \n YOU ONLY HAVE ONE MINUITE PER ROOM.")
}

function draw() { //this is where the magic happens
userBackground();
ChoosePen();

 }
function userBackground(){  // this is the function that'll make it so you have one minuite to create a drawing on each background.
  if (gameStart < 60000){
    imageMode(CORNER);
    background(appartment, 0, 0, width, height);
  }
  else if (gameStart >= 60000 && millis() <= 180000){
    imageMode(CORNER)
    background(kitchen, 0, 0, width, height);
  }
  else if(gameStart > 180000){
    imageMode(CORNER)
    background(hallway, 0, 0, width, height);
    gameStart = gameStart - millis();
  }
}


 function ChoosePen(){    //this function lets the user pick the drawing utensil.
   if (keyIsPressed && keyCode === 32) {
     imageMode(CENTER)
    image(shell, mouseX, mouseY, shell.width * scaler , shell.height * scaler)

   }
   else if (keyIsPressed && keyCode === 66) {
     imageMode(CENTER)
     image(bazinga, mouseX, mouseY, bazinga.width * scaler , bazinga.height * scaler)
   }

   else if (keyIsPressed && keyCode === 86) {
     imageMode(CENTER)
     image(youngShell, mouseX, mouseY, youngShell.width * scaler , youngShell.height * scaler)
   }

   else if (keyCode === 88){
     background(255)
     image(shell, mouseX, mouseY, shell.width * scaler , shell.height * scaler)
   }
 }

function mouseWheel(event) {   //Now this here adjusts the size of the pen.
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
