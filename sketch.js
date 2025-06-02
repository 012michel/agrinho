function setup() {
  createCanvas(800, 800);
  background("white");
}
function draw() {
  fill("green");
  rect(0, 0, 100, 200);
  fill("white");
  rect(100, 0, 100, 200);
  fill("red");
  rect(200, 0, 100, 200);

  fill("pink");
  rect(0, 250, 300, 100);
  fill("red");
  rect(0, 350, 300, 100);
  fill("yellow");
  rect(0, 450, 300, 100);
}
