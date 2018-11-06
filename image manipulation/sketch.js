// Image Manipulation
// Meeka Fast
// Oct 9, 2018

let bart;
let grayBart;

function preload() {
  bart = loadImage("assets/cursed image.jpg");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  image(bart, 0, 0);
  //grayBart = makeGrayscale(bart);
}

function draw(){

}

function makeGrayscale(sourceImage){
  let img = createImage(sourceImage.width, sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();

  for (let x = 0; x < img.width; x++){
    for (let y = 0; y < img.height; y++){
      let thisPixel = sourceImage.get(x, y);

      let r = red(thisPixel);
      let g = green(thisPixel);
      let b = blue(thisPixel);

      let average = (r + b + g) / 3;

      let newPixel = color(average, average, average);

      img.set(x, y, newPixel);
    }
  }
  img.updatePixels();
  return img;
}
