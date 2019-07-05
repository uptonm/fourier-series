let time = 0;
let wave = [];

let slider;

function setup() {
  createCanvas(1200, 400);
  slider = createSlider(1, 10, 1);
}

function draw() {
  background(0);
  translate(250, 200);

  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++) {
    let prevX = x;
    let prevY = y;

    let n = i * 2 + 1;
    let radius = 100 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevX, prevY, radius * 2);

    fill(255);
    stroke(255);
    line(prevX, prevY, x, y);
  }
  wave.unshift(y);

  translate(200, 0);
  line(x - 200, y, 0, wave[0]);

  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.01;

  if (wave.length > 2000) {
    wave.pop();
  }
}
