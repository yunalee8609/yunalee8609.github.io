let input, button, slider;
let textToAnimate = "";
let xPos = 50;
let speed = 2;

function setup() {
    createCanvas(600, 300);
    input = createInput("Enter text");
    input.position(20, height + 20);
    
    button = createButton("Animate");
    button.position(input.x + input.width + 10, height + 20);
    button.mousePressed(startAnimation);
    
    slider = createSlider(1, 10, 2);
    slider.position(20, height + 50);
}

function draw() {
    background('skyblue');
    textSize(32);
    fill(50);
    text(textToAnimate, xPos, height / 2);
    xPos += speed;
    
    if (xPos > width) {
        xPos = -textWidth(textToAnimate);
    }
}

function startAnimation() {
    textToAnimate = input.value();
    speed = slider.value();
}

function mousePressed() {
    background(random(255), random(255), random(255));
}