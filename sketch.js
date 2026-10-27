let x, y;
let xSpeed, ySpeed;
let ballSize = 40;
let ballColor;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("sketch-container");

  x = width / 2;
  y = height / 2;
  xSpeed = 4;
  ySpeed = 3;
  ballColor = color(255, 100, 150);
}

function draw() {
  background(22, 27, 51);

  // Update position
  x += xSpeed;
  y += ySpeed;

  // Bounce off walls
  if (x + ballSize / 2 >= width || x - ballSize / 2 <= 0) {
    xSpeed *= -1;
    ballColor = color(random(100, 255), random(100, 255), random(100, 255));
  }
  if (y + ballSize / 2 >= height || y - ballSize / 2 <= 0) {
    ySpeed *= -1;
    ballColor = color(random(100, 255), random(100, 255), random(100, 255));
  }

  // Draw the ball
  noStroke();
  fill(ballColor);
  ellipse(x, y, ballSize);
}

