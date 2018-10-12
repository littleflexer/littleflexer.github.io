// Sheldon Drawing Simulator
// Meeka Fast (littleflexer)
// Sept 19th
//
// Extra for Experts:
// My state varible for this version of DrawSheldon can be found as lastBackground. I also threw in a gif on my index page.
let shell;  //these are my varibles
let scaler;
let music;
let leonard;
let Raj;
let appartment;
let hallway;
let kitchen;
let lastBackground = 0;

function preload(){ //I use the preload to set up everything saved in the assets folder
  shell = loadImage("assets/SHELDON-BIG-BANG-THEORY.png")
  leonard = loadImage("assets/Leonard.png")
  Raj = loadImage("assets/Raj---the-big-bang-theory.png")
  appartment = loadImage("assets/Sheldonappartment.jpg")
  hallway = loadImage("assets/big bang theaory hallway.jpg")
  kitchen = loadImage("assets/bbt kitchen.jpg")
  music = loadSound("assets/The Big Bang Theory - Full (1).mp3")

}

function setup() { //this sets up the canvas, music, and mousewheel
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scaler = 0.25
  music.setVolume(0.5)
  music.loop()
  alert(" HOW TO DRAW\n m- switch through backgrounds\n n- draw with Sheldon's face\n b- draw with the Raj's face\n v- draw with Leonard's face\n x- restart\n z- clear current screen\n lift up pen ny using any key that wasn't stated \n Use the Mouse Wheel to adjust size, up for small and down for big\n PRACTICE HERE AND CLICK 'Z' OR 'M' TO BEGIN")

}

function draw() { //this is where the magic happens
ChoosePen();

 }
function userBackground(){  // this function gives you the power to choose what your background is.

  if (lastBackground === 0){
    imageMode(CORNER);
    background(appartment, 0, 0, width, height);

  }
  if (lastBackground === 1){
    imageMode(CORNER);
    background(kitchen, 0, 0, width, height);


  }
  if(lastBackground === 2){
    imageMode(CORNER);
    background(hallway, 0, 0, width, height);

  }
}

function keyTyped(){
  if (key === "m" || key === "M"){
    lastBackground++;

    if (lastBackground >2){
      lastBackground = 0;
    }
    userBackground();
    }
  if (key === "z" || key === "Z"){
    userBackground();
  }

}


 function ChoosePen(){    //this function lets the user pick the drawing utensil.
   if (keyCode === 78) {
    imageMode(CENTER)
    image(shell, mouseX, mouseY, shell.width * scaler , shell.height * scaler)

   }
   if (keyCode === 66) {
     imageMode(CENTER)
     image(Raj, mouseX, mouseY, Raj.width * scaler , Raj.height * scaler)
   }

    if (keyCode === 86) {
     imageMode(CENTER)
     image(leonard, mouseX, mouseY, leonard.width * scaler , leonard.height * scaler)
   }

   if (keyCode === 88){
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

}

function playMusic() {
  music.play()
}
