

//Position Variables
var x = 100;
var y = 100;

// Speed - Velocity
var vx = 2000;
var vy = 2000;

// Acceleration
var ax = 1000;
var ay = 1000;

var vMultiplier = 0.007;
var bMultiplier = 0.6;

function setup() {
  var canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent('backgroundAnimation')

    fill(0);
}

function draw() {
    background(255);
    ballMove();
    ellipse(x, y, 30, 30);
}

function ballMove() {

	ax = accelerationX;
	ay = accelerationY;

	vx = vx + ay;
	vy = vy + ax;
	y = y + vy * vMultiplier;
	x = x + vx * vMultiplier;

	// Bounce when touch the edge of the canvas
	if (x < 0) {
		x = 0;
		vx = -vx * bMultiplier;
	}
 	if (y < 0) {
 		y = 0;
 		vy = -vy * bMultiplier;
 	}
 	if (x > width - 20) {
 		x = width - 20;
 		vx = -vx * bMultiplier;
 	}
 	if (y > height - 20) {
 		y = height - 20;
 		vy = -vy * bMultiplier;
 	}

}
