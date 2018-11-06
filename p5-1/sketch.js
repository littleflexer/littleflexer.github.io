// Dogpardy
// Meeka Fast
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 4;
let cols = 5;
let grid;
let cellSize;

let titleBg;

let rand1;
let rand2;
let rand3;
let rand4;

let questionValues = [[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [3, 3, 3, 3, 3], [4, 4, 4, 4, 4]];
let stringOfQuestions1 = ["Who goes by the nickname 'Mr. WorldWide?'", "What is a canine?", "How many legs do dogs have?", "Big dogs or little dogs?"];
let stringOfQuestions2 = ["What is the smallest dog?", "Who's smarter: A dog or a two year old?", "True or False: Dogs can help improve mood?", "Dogs or cats?"];
let stringOfQuestions3 = ["SSBhbSBydW5uaW5nIG91dCBvZiBxdWVzdGlvbnMu", "Which of these are not a real famous dog: Loca the pug, gabe the dog, Airbud?", "https://www.base64encode.org/", "What is internet lingo for bark?"];
let stringOfQuestions4 = ["Are newborn dogs born with open or closed ear canels?", "What does Corgi translate to?", "What Star Wars creature was modelled off of George Lucas's dog?", "Dogs?"];

function preload(){
  titleBg = loadImage("assets/Dogparty title thing.jpg");
}

function setup() {
  createCanvas(600, 600);
  cellSize = 150;
  grid = makeColsRows(cols, rows);
  background(titleBg, 0, 0, width, height);

}

function draw() {
  background(255);
  displayGrid();

}

function displayGrid() {
  strokeWeight(5);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(32, 105, 188);
      }
      else {
        fill(32, 105, 188);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function makeColsRows(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        randomGrid[y].push;
      }
      else {
        randomGrid[y].push;
      }
    }
  }
  return randomGrid;
}

function mouseClicked(){
  //find out which square is pressed and display a question
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);
  let rand1 = random(stringOfQuestions1);
  let rand2 = random(stringOfQuestions2);
  let rand3 = random(stringOfQuestions3);
  let rand4 = random(stringOfQuestions4);
  //console.log(questionValues[y][x] ); //atom dosn't know 'console' is a thing. It still works
  if (questionValues === 1){
    console.log(rand1);
  }
  else if (questionValues === 2){
    console.log(rand2);
  }
  else if (questionValues === 3){
    console.log(rand3);
  }
  else if (questionValues === 4){
    console.log(rand4)
  }
}
