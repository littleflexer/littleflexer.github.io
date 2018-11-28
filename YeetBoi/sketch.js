// Supah Yeet Boi
// Meeka Fast
// Now

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 15;
    this.dx = random(3, 10);
    this.dy = random(0, 0);
    this.ay = 1;
    this.transparency = 255;
    this.color = color(150, this.transparency);
  }
  display() {
    fill(this.color);
    stroke(this.color);
    rect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.transparency -= 0.1;
    this.color.setAlpha(this.transparency);
    this.x += this.dx;
    this.y += this.dy;

  }

}

class Chad {
  constructor(x, y) {
		this.chadX = 1000;
		this.chadY = 300;
		this.chadW = 10;
		this.chadDy = 5;
    this.color = "Red";
  }

  display() {
     fill(this.color);
 		 stroke(this.color);
  	 ellipse(this.chadX, this.chadY, this.chadW, this.chadW);
  }
  update() {
    if (key === "w" || key === "W") {
   	  this.chadY = this.chadY - this.chadDy;
	  }
  	else if (key === "s" || key === "S") {
   		this.chadY = this.chadY + this.chadDy;
 	 	}
    if (this.chadY <= 0 + this.chadW) {
      this.chadY = this.chadW;
    }
    else if (this.chadY >= 400 - this.chadW) {
      this.chadY = 390;
    }
  }
}


// let fwork;

let bossChad = new Chad(600, 300);
let fireworks = [];
let glassShoot = 3000;
let lastStateChange = 0;
let someParticle;

function setup() {
  createCanvas(windowWidth, 400);
  // fwork = new Particle(width/2, height/2);
  someParticle = new Particle(10, 10);
}

function draw() {
  background(255);
  bossChad.display();
  bossChad.update();
  displayShards();
  // fwork.display();
  // fwork.update();
  for (let i = fireworks.length - 1; i >= 0; i--) {
    if (fireworks[i].transparency <= 0) {
      fireworks.splice(i, 1);
    } else {
      fireworks[i].update();
      fireworks[i].display();
      // fireworks[i].bounce();
    }
  }
}

function displayShards() {
  	//let lastStateChange;
  	let elapsedTime = millis() - lastStateChange;
  	if (elapsedTime >= glassShoot) {
			let someParticle = new Particle(windowWidth - windowWidth, random( windowHeight - windowHeight, windowHeight));
  		fireworks.push(someParticle);
      lastStateChange = lastStateChange + 300;

  	}

}

function detectHit() {
  if (bossChad.y === someParticle.y && bossChad.x === somaParticle.x){
      
  }
}
