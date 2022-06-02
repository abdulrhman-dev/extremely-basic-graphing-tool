function setup() {
  createCanvas(500, 500);
}

let allNumberLine = 4;


function mouseWheel(event) {
  print(event.delta);
  if (Math.sign(event.delta) === 1) {
    allNumberLine += 2;
  } else if (allNumberLine !== 2) {
    allNumberLine -= 2
  }

}

function doubleClicked() {
  allNumberLine = 22
}

function draw() {
  let endNumberLine = allNumberLine / 2;
  let beginNumberLine = -endNumberLine;
  let refineNumber = (0.0001 * allNumberLine);


  background("#1c1c1c")
  stroke("grey")
  strokeWeight(1.5)
  line(width / 2, 0, width / 2, 500)
  line(0, height / 2, 500, height / 2)

  noFill();
  stroke("#53f5ac")
  strokeWeight(2)

  beginShape();
  let x = beginNumberLine
  while (x <= endNumberLine) {

    let yPosition = map(f(x), beginNumberLine, endNumberLine, height, 0);
    let xPosition = map(x, beginNumberLine, endNumberLine, 0, width)
    vertex(xPosition, yPosition)
    x += refineNumber;
    textSize(0.2)
  }

  // end vertex 
  let yPosition = map(f(endNumberLine), beginNumberLine, endNumberLine, height, 0);
  let xPosition = map(endNumberLine, beginNumberLine, endNumberLine, 0, width)
  vertex(xPosition, yPosition)
  endShape();
}

// Change Function here

function f(x) {
  return exp(x)
}
















































/*
? 1D Perlin Noise

 fill("black")
  textSize(15)
  text("Perlin Noise 1D", 10, 25)

  stroke("#4298f5")

  noFill()
  let xoff = 0;
  beginShape()
  for (let x = 0; x < width; x++) {
    let y = map(noise(xoff), 0, 1, 60, height);
    vertex(x, y)
    xoff += 0.01;
  }
  endShape()
  noLoop()
*/