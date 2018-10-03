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
let lastBackground = 0;

function preload(){ //I use the preload to set up everything saved in the assets folder
  bazinga = loadImage("assets/bazinga.png")
  youngShell = loadImage("assets/young sheldon.png")
  shell = loadImage("assets/SHELDON-BIG-BANG-THEORY.png")
  appartment = loadImage("assets/Sheldonappartment.jpg")
  hallway = loadImage("assets/big bang theaory hallway.jpg")
  kitchen = loadImage("assets/bbt kitchen.jpg")

}

function setup() { //this sets up the canvas, music, and mousewheel
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scaler = 0.25
  music.setVolume(0.5)
  music.loop()
  alert("Currently down due to adjustments being made")

}

function draw() { //this is where the magic happens
userBackground();
ChoosePen();

 }
function userBackground(){  // this is the function that'll make it so you have one minuite to create a drawing on each background.
  if (keyIsPressed && keyCode === 39 && lastBackground === 0){
    imageMode(CORNER);
    background(appartment, 0, 0, width, height);
    lastBackground = lastBackground + 1;
  }
  else if (keyIsPressed && keyCode === 39 && lastBackground === 1){
    imageMode(CORNER)
    background(kitchen, 0, 0, width, height);
    lastBackground = lastBackground + 1;

  }
  else if(keyIsPressed && keyCode === 39 && lastBackground === 2){
    imageMode(CORNER)
    background(hallway, 0, 0, width, height);
    lastBackground = 0;
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
