var turtle, run;

function steps() {
  turtle.color = 'rgba(0, 0, 0, .2)';
  turtle.forward(180);
  turtle.right(91);
  turtle.color = 'rgba(255, 0, 0, .3)';
  turtle.forward(180);
  turtle.right(91);
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  strokeWeight(1);

  turtle = new Turtle(this);

  // reposition turtle
  turtle.penDown = false;
  turtle.forward(100);
  turtle.right(90);
  turtle.back(100);

  // setup run
  turtle.penDown = true;
  repeat(steps, 50);
  run = turtle.getRun();
};

function draw() {
  background(200);
  
  // use print() to get to the result immediately
  run.animate(30); // param is run speed
};

function repeat(fn, n) {
  var a = Array.apply(null, Array(n)).map(
    function (_, i) {return i + 1;}
  ).forEach(fn);
}