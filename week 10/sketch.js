let bubbles = [];
let mousePressX = 0;
let mousePressY = 0;
let creatingBubble = false;
let nameInput;
let currentRadius = 0;

function loadData() {
    let savedData = localStorage.getItem('bubbles');
    if (savedData) {
        let parsedData = JSON.parse(savedData);
        bubbles = parsedData.map(b => new Bubble(b.x, b.y, b.radius, b.name));
    }
}

function saveData() {
    localStorage.setItem('bubbles', JSON.stringify(bubbles));
}

function setup() { 
    let p5Canvas = createCanvas(1600, 860);
    loadData();
    p5Canvas.mousePressed(saveMousePress);
    ellipseMode(RADIUS);
    textSize(20);
    
    nameInput = createInput("");
    nameInput.position(-100, -100);
    nameInput.style("position", "absolute");
    nameInput.style("display", "none");
    nameInput.elt.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            submitBubbleName();
        }
    });
}

function draw() {
    background('rgb(106, 146, 211)');
    for (let bubble of bubbles) {
        bubble.display();
    }

    if (creatingBubble) {
        let radius = dist(mousePressX, mousePressY, mouseX, mouseY);
        noFill();
        stroke(0);
        strokeWeight(4);
        circle(mousePressX, mousePressY, radius);
    }

    textAlign(LEFT, BOTTOM);
    fill(0);
    noStroke();
    text('click, hold, drag, and name!', 10, height - 10);
}

function saveMousePress() {
    mousePressX = mouseX;
    mousePressY = mouseY;
    creatingBubble = true;
}

function mouseReleased() {
    if (creatingBubble) {
        currentRadius = dist(mousePressX, mousePressY, mouseX, mouseY);
        if (currentRadius > 5) {
            nameInput.position(mouseX, mouseY);
            nameInput.style("display", "block");
            nameInput.value("");
            nameInput.elt.focus();
        }
        creatingBubble = false;
    }
}

function submitBubbleName() {
    let name = nameInput.value().trim();
    if (name) {
        bubbles.push(new Bubble(mousePressX, mousePressY, currentRadius, name));
        saveData();
    }
    nameInput.style("display", "none");
    nameInput.value("");
}

class Bubble {
    constructor(x, y, radius, name) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.name = name;
    }

    mouseOver() {
        return dist(mouseX, mouseY, this.x, this.y) < this.radius;
    }

    display() {
        stroke(0);
        noFill();
        strokeWeight(4);
        circle(this.x, this.y, this.radius);
        if (this.mouseOver()) {
            fill(0);
            noStroke();
            textAlign(CENTER);
            text(this.name, this.x, this.y + this.radius + 30);
        }
    }
}
