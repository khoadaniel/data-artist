var col=0;
var r = 0;
var g = 0
var b = 0;

var myPoint={
  x:100,
  y:50
};

var myColor={
  r:255,
  g:0,
  b:0
};

function setup() {
  createCanvas(600, 400);
  background(r,g,b);

}

function draw() {
  // col = mouseX -> when mouseX reaches 255 the ellipse will become white\
  r = map(mouseX,0,600,0,255)
  g = map(mouseX,0,600,0,255)
  b = map(mouseX,0,600,255,0)



  col = map(mouseX,0,600,0,255)


  fill(col, col, col);
  ellipse(mouseX, 200, 64, 64);

  noStroke()
  myPoint.x = random(0, width)
  myPoint.y = random(0, height)
  myColor.r = random(0,r)
  myColor.g = random(0,g)
  myColor.b = random(0,b)
  fill(myColor.r, myColor.g, myColor.b, 100);
  ellipse(myPoint.x, myPoint.y, 20, 20);
}

