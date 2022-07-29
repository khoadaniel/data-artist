// function setup() {
//   createCanvas(600,400);
//   //background
//   background(250,250,100);

// }

// function draw() {

//   // ellipse
//   fill(250,20,200);
//   ellipse(mouseX,100,100,100)

//   //rectangle
//   fill(200,250,200)
//   rect(400,100,50,50)
// }

//-----------------------------
// function setup() {
//   createCanvas(600,400);
//   //background
//   background(250,250,100);

// }

// function draw() {

//   // ellipse
//   noStroke();
//   fill(250,20,200, 50); //alpha regulates the transparency
//   ellipse(mouseX,mouseY,10,10)

//   //rectangle
//   fill(200,250,200)
//   rect(400,100,50,50)

// }

// function mousePressed() {
//   background(250,250,100);
// }

//---------------------------------
var circleX = 0;
function setup(){
  createCanvas(600,400);
}

function draw(){
  // background
  background(250,250,100);
  // ellipse
  fill(250,200,200);
  ellipse(circleX,200,80,80)

  circleX = circleX + 1;

}
