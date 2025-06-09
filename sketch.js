function setup() {
  createCanvas(800, 800);
  background("white");
}
function draw() {
  fill("red");
  rect(0, 0, 100, 200);
  fill("white");
  rect(100, 0, 100, 200);
  fill("red");
  rect(200, 0, 100, 200);

  fill("orange");
  rect(0, 250, 300, 100);
  fill("red");
  rect(0, 350, 300, 100);
  fill("yellow");
  rect(0, 450, 300, 100);
  fill("white")
  circle(400, 400, 300, 100);
  fill("red");
  circle(400, 400, 260, 100);
  fill("white")
  circle(400, 400, 230, 100);
  fill("red")
  circle(400, 400, 200, 100)
  fill("white")
  circle(400, 400, 170, 100);
  fill("red");
  circle(400, 400, 140, 100);
  fill("white")
  circle(400, 400, 110, 100);
  fill("red")
  circle(400, 400, 100, 100);
  fill("white")
  circle(400, 400, 100, 100);
  fill("red")
  // Calcula as coordenadas do centro da tela
  let centerX = width / 2;
  let centerY = height / 2;

  // Define as coordenadas dos vértices do triângulo
  let x1 = centerX - 35; // Primeiro vértice (esquerda)
  let y1 = centerY + 40; // Primeiro vértice (baixo)
  let x2 = centerX + 35; // Segundo vértice (direita)
  let y2 = centerY + 40; // Segundo vértice (baixo)
  let x3 = centerX;       // Terceiro vértice (cima)
  let y3 = centerY - 40;  // Terceiro vértice (cima)

  // Desenha o triângulo
  triangle(x1, y1, x2, y2, x3, y3);
}
