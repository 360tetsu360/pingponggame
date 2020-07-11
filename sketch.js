var plane;
var ball;
var bounce = 0;

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('canvas');
  plane = new Plane();
  ball = new ball();
}

function draw() {
  background(0);
  textSize(32);
  var score = ball.score();
  var scores = 'score: ' + str(score)
  var elem = document.getElementById("score").innerHTML = scores
  ball.plane(mouseX);
  ball.bounce();
  ball.move();
  ball.show();
  plane.show();
  plane.move(mouseX);

}
