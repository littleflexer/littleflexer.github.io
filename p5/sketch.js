// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class randomWalker {
  constructor(x, y){
    this.x = random(1, 10);
    this.y = random(1, 10);
    this.dx = 4;
    this.dy = 4;
    this.color = color(random(255), random(255), random(255));
  }

  display(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 3, 3);


  }
  update(){
    let choice = random(100);
    if (choice < 25){
      //left
      this.x -= this.dx;
    }
    else if (choice < 50){
      //right
      this.x += this.dx;
    }
    else if (choice < 75){
      //up
      this.y -= this.dy;
    }
    else {
      //down
      this.y += this.dy;
    }
  }
}

let joe;
let theWalkers = [];
let numberOfWalkers = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfWalkers; i++){
    let bob = new randomWalker(width/2, height/2);
  }
}


function draw() {
  for (let i = 0; i < numberOfWalkers; i++){
    theWalkers[i].update();
    theWalkers[i].display();
  }
}
