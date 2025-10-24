/*let valueSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  valueSlider = createSlider(0, 100, 50); // mittlere Position
  valueSlider.position(30, 30);
  noStroke();
}

function draw() {
  let val = valueSlider.value();
  
  // Farben
  let dark = color(86, 60, 92);
  let light = color(242, 189, 205);
  
  // Hintergrundhälften
  noStroke();
  fill(dark);
  rect(0, 0, width / 2, height);
  fill(light);
  rect(width / 2, 0, width / 2, height);
  
  // Sliderwert in Kreisgrößen umwandeln
  let leftSize = map(val, 0, 100, width * 0.8, width * 0.05);
  let rightSize = map(val, 0, 100, width * 0.05, width * 0.8);
  
  // Kreise zeichnen
  fill(light);
  ellipse(width / 4, height / 2, leftSize, leftSize);   // linker Kreis
  fill(dark);
  ellipse(3 * width / 4, height / 2, rightSize, rightSize); // rechter Kreis
}*/




let valueSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  valueSlider = createSlider(0, 100, 50);
  valueSlider.position(30, 30);
  noStroke();
}

function draw() {
  let val = valueSlider.value();
  
  // Farben
  let dark = color(86, 60, 92);
  let light = color(242, 189, 205);
  
  // Dynamische Hintergrundfüllung basierend auf Slider
  let leftWeight = map(val, 0, 100, 1, 0);  // 0 → linker Kreis voll, 100 → rechter Kreis voll
  let rightWeight = map(val, 0, 100, 0, 1);
  
  // Hintergrund zeichnen
  fill(lerpColor(light, dark, leftWeight));
  rect(0, 0, width, height);
  
  // Kreise zeichnen
  let leftSize = map(val, 0, 100, width * 0.8, width * 0.05);
  let rightSize = map(val, 0, 100, width * 0.05, width * 0.8);
  
  fill(light);
  ellipse(width / 4, height / 2, leftSize, leftSize);  
  fill(dark);
  ellipse(3 * width / 4, height / 2, rightSize, rightSize);
}