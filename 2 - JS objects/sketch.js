var myCircle = {
  x: 0,
  y: 200,
  diameter: 50
};

var r=218;
var g=160;
var b=221;

function setup(){
  createCanvas(600,400);
}

function draw(){
  background(r, g, b);
  fill(250,250,200);
  ellipse(myCircle.x, myCircle.y, myCircle.diameter, myCircle.diameter);

  myCircle.x = myCircle.x+1;
}

