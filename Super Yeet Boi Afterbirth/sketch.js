//Super Yeet Boi
//Callan F.
//Initiated November, 2018

let state;

let grid;
let rows;
let cols;
let cellSize;

let windowSize = 600;

let chadStanding;
let chadRunning;
let chadJumping;
let chadYeeting;

let chad;
let terrains = [];

class Particle { //creating thee shard enemies
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 15;
    this.dx = random(3, 10);
    this.dy = random(0, 0);
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

class bChad { //creating a Walker to play as
  constructor(x, y) {
    this.chadX = 1000;
    this.chadY = 10;
    this.chadW = 10;
    this.chadDy = 5;
    this.color = "Red";
  }

  display() {  //Pretty explanitory. Just fills and displays
    fill(this.color);
    stroke(this.color);
    ellipse(this.chadX, this.chadY, this.chadW, this.chadW);
  }
  update() {  //walker and wall detection
    if (keyCode === 38) {
      this.chadY = this.chadY - this.chadDy;
    }
    else if (key === 40) {
      this.chadY = this.chadY + this.chadDy;
    }
    if (this.chadY <= 0 + this.chadW) {
      this.chadY = this.chadW;
    }
    else if (this.chadY >= 400 - this.chadW) {
      this.chadY = 390;
    }
  }

  collideCheck(someBox) { //Our detection checker
    let isHitting = collideRectCircle(someBox.x, someBox.y, someBox.size, someBox.size, this.x, this.y, this.chadW);
    console.log(isHitting);
  }
}

class Chad {
  constructor() {
    this.x = 300;
    this.y = 300;
    this.dx = 0;
    this.dy = 0;
    this.touchingGround = true;
    this.touchingWallL = false;
    this.touchingWallR = false;
    this.touchingCeiling = false;
    this.maxFall = 6;
  }
  display() {
    image(chadStanding, this.x, this.y);
  }
  move() {
    if (keyIsPressed) {
      if (key === "a" && this.touchingWallL === false) {
        this.touchingWallR = false;
        this.dx = -5;
      }
      else if ((key === "a" || key === "s") && this.touchingWallL === true) {
        this.dx = 0;
      }
      if (key === "d" && this.touchingWallR === false) {
        this.touchingWallL = false;
        this.dx = 5;
      }
      else if ((key === "d" || key === "s") && this.touchingWallR === true) {
        this.dx = 0;
      }
    }
    else if (!keyIsPressed) {
      this.dx = 0;
    }
    this.x += this.dx;
    this.y += this.dy;
  }

  jump() {
    if (keyIsPressed && key === "w") {
      if (this.touchingGround === true) {
        this.dy = -4.5;
        this.touchingGround = false;
      }
    }
  }

  fall() {
    if (this.touchingGround === false) {
      if (this.dy < this.maxFall) {
        this.dy += 0.15;
      }
    }
    else {
      this.dy = 0;
    }
  }
}

class Terrain {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.ox = this.x;
    this.y = this.y;
    this.type = type;
    if (this.type === 0) {
      this.dx = 0;
      this.dy = 0;
    }
    if (this.type === 1) {
      this.dx = 0;
      this.dy = 0;
    }
    else if (this.type === 2) {
      this.dx = 0;
      this.dy = -5;
      if (dist(this.x, this.y, this.ox, this.oy) > 3) {
        this.dy *= -1;
      }
    }
    else if (this.type === 3) {
      this.dx = -5;
      this.dy = 0;
      if (dist(this.x, this.y, this.ox, this.oy) > 3) {
        this.dx *= -1;
      }
    }
  }
  display() {
    noStroke();
    if (this.type === 0) {
      fill(255);
    }
    else if (this.type === 1) {
      fill(0);
    }
    rect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
  }
}

let bossChad = new bChad(600, 300);
let shards = [];
let glassShoot = 3000;
let lastStateChange = 0;
let someParticle;
let collided =0;

function preload() {
  grid = loadStrings("assets/Grid1.txt");
  chadStanding = loadImage("assets/Idle Animation.gif");
  chadRunning = loadImage("assets/Running Animation.gif");
  chadJumping = loadImage("assets/Jumping Animation.gif");
  chadYeeting = loadImage("assets/Yeeting Animation.gif");
}

function setup() {
  createCanvas(windowSize, windowSize);
  imageMode(CENTER);
  rows = grid[0].length;
  cols = grid[0].length;
  someParticle = new Particle(10, 10);

  cellSize = windowSize / rows;

  chad = new Chad();

  cleanupGrid();
}

function draw() {
  background(128);
  chad.display();
  chad.move();
  chad.jump();
  chad.fall();
  bossChad.display();
  bossChad.update();
  bossChad.collideCheck(someParticle);
  displayGrid();
  displayShards();
  if (bossChad.chadX === someParticle.x) {
    if (bossChad.chadY === someParticle.y) {
      collided = 1;
    }
  }
  if (collided === 1) {
    background(0);
  }
  for (let i = shards.length - 1; i >= 0; i--) { // this adds more shards to the array
    bossChad.collideCheck(shards[i]);
    if (shards[i].transparency <= 0) {
      shards.splice(i, 1);
    }
    else {

      shards[i].update();
      shards[i].display();
    }
  }
}

function cleanupGrid() {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split("");
  }
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === "0") {
        let ter = new Terrain(grid[y], grid[y][x], 0);
        terrains.push(ter);
      }
      else if (grid[y][x] === "1") {
        let ter = new Terrain(grid[y], grid[y][x], 1);
        terrains.push(ter);
      }
    }
  }
}

function displayGrid() {
  for (let i = 0; i < terrains.length-1; i++) {
    terrains[i].display();
  }
}

function displayShards() { // this will have the glass shards slowly increase in amount while at random speeds
  let elapsedTime = millis() - lastStateChange;
  if (elapsedTime >= glassShoot) {
    let someParticle = new Particle(windowWidth - windowWidth, random( windowHeight - windowHeight, windowHeight));
    shards.push(someParticle);
    lastStateChange = lastStateChange + 300;

  }
}

function detectHit() {
  if (bossChad.y === someParticle.y && bossChad.x === someParticle.x){  // collision detected
    // Make game stop moving and then have a thingy that'll make x restart or something

    collided = 1;
    console.log(collided);
  }
}
