let c1;
let c2;
let angle = 0;
let vectors = [];
let beta = 0;
var myCanvas = createCanvas(windowWidth, windowHeight);


function setup() {
  myCanvas.parent("infoAnimation");
  
  smooth();
  
    createCanvas(windowWidth, windowHeight);
  c1 = color(255,150,0);
  c2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}

function draw() {
  background(230,150,0);
  rotateY(angle);
  rotateX(angle);
  rotateZ(angle);
  angle += 0.001;

  let r = 80 * (0.8 + 1.6 * sin(6 * beta));
  let theta = 1 * beta;
  let phi = 0.6 * PI * sin(12 * beta);
  let x = r * cos(phi) * cos(theta);
  let y = r * cos(phi) * sin(theta);
  let z = r * sin(phi);

  vectors.push(createVector(x, y, z));

  beta += .1;

  noFill();
  stroke(255);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < vectors.length; i++) {
    let v = vectors[i];
    stroke(230, 0, mouseX-200);
    vertex(v.x, v.y, v.z);
  }
  endShape();
}