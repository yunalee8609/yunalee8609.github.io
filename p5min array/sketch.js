let particles = [];
let images = [];
let revealAmount = 0;
let imgDirty, imgClean;

function preload(){
    imgDirty = loadImage("Dirty.webp");
    imgClean = loadImage("Clean.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    images = [imgDirty, imgClean];
}

function draw() {
    background("cornFlowerblue");

    textSize(600);
    fill(255, 100, 100, 50);
    text("🏰", 300, 550);

    noStroke();


    textSize(20);
    fill("black")
    text("magic time over:(", 70, 130);

    let clockSize = 80;
    let clockX = 100;
    let clockY = 100;
    textSize (clockSize);
    text("🕰️", clockX, clockY);



    textSize(40);
    fill("pink")
    text("press to dress👑~", 530, 700);

    tint(255, (1-revealAmount) * 255);
    image(images[0], 300, 300, 220, 450 );

    tint(255, revealAmount * 255);
    image(images[1], 200, 300, 450, 450);
    noTint();

    if (mouseIsPressed) {
        if(dist(mouseX, mouseY, clockX, clockY) < clockSize) {
            location.reload();
        }
    }

    if (mouseIsPressed || keyIsPressed) {
        particles.push(new Particle(mouseX, mouseY));
        revealAmount =  constrain(revealAmount + 0.01, 0, 1);
    }

    drawStick(mouseX, mouseY);

    for (let i = particles.length -1; i>= 0; i--) {
        particles[i].update();
        particles[i].display();

        if(particles[i].isDead()) {
            particles.splice(i, 1);
        }
    }
}

function drawStick(x, y) {
    stroke(255);
    strokeWeight(3);
    line(x, y+40, x, y-0);
}

class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.lifespan = 255;
        this.emoji = random(["✨", "🌟", "💫"]);
    }

    update(){
        this.pos.add(this.vel);
        this.lifespan -= 5;
    }

    display(){
        fill(255, 255, 100,this.lifespan);
        textSize(18);
        text(this.emoji, this.pos.x, this.pos.y);
    }

    isDead(){
        return this.lifespan <0;
    }
}