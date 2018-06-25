// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var timetable = [
  [50, 'blue', 'úvod'],
  [50, 'green', 'úkol'],
  [15, 50, 'přestávka'],
  [75, 'green', 'úkol'],
  [20, 'red', 'sdílení'],
];

var total = timetable.reduce((acc, item) => acc + item[0], 0);

var start = 9 * 60;
var current = new Date().getHours() * 60 + new Date().getMinutes();
var spent = current - start;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  angleMode(DEGREES);
}

function draw() {
  background(200);
  var elapsed = 0;

  timetable.reduce((elapsed, item) => {
    var arcangle = 360 / total * item[0];

    fill(item[1]);
    noStroke();
    arc(200, 200, 200, 200, elapsed, elapsed + arcangle);

    if (spent > 0 && spent <= total) {
      fill(0, 10);
      stroke('black');
      strokeWeight(2);
      arc(200, 200, 250, 250, -90, -90 + 360 / total * spent);
    }


    return elapsed += arcangle;
  }, -90);
}
