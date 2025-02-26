    //flower tutorial https://p5js.org/tutorials/data-structure-garden/ 
let flowers = [];
    //until here
let butterfly = 180;

function setup() {
    createCanvas(720, 480);
}

function draw(){
    //followed the tutorial from https://p5js.org/tutorials/get-started/ to add emojis 
    //sky
    background(137, 207, 240);
    //sun
    fill ("yellow");
    stroke ("orange");
    strokeWeight (8);
    circle(550, 50, 90);
    //grass
    stroke(0);
    strokeWeight(0);
    fill(119, 179, 92);
    rect (0, 200, 720, 300);
    //until here

    //My line that I added
    textSize(32);
    fill(0);
    text("Click To Grow!", 250, 100);
    fill(131,101,57);
    stroke(128, 0, 32);
    strokeWeight(25);
    rect (50, 240, 280, 200);
    rect (390, 240, 280, 200);
    //until here

    //flower tutorial https://p5js.org/tutorials/data-structure-garden/ 
    updateAndDrawFlowers();
    //until here

    //changed up some of the emojis and positioning
    textSize(75);
     //learned to make things floating up and down from https://p5js.org/reference/p5/sin/
     text("🦋", 100, butterfly + sin(frameCount * 0.1) * 10);
     textSize(150);
     text("👩🏻‍🌾",500, 461);
     //until here
}


//flower tutorial https://p5js.org/tutorials/data-structure-garden/ 
function mousePressed() {
    let flower = createFlower();
    flower.x = mouseX;
    flower.y = mouseY;
    flowers.push(flower);
}

function updateAndDrawFlowers() {
    for (let flower of flowers) {
        drawFlower(flower);
        flower.size *= 0.99;
        flower.lifespan -= 1;
        if (flower.lifespan <= 0) {
            let i = flowers.indexOf(flower);
            flowers.splice(i, 1);
        }
    }
}

function flowerPower(){
    for(let i = 0; i< 20; i+=1) {
        let flower1 = createFlower();
        flowers.push(flower1);
    }
}

function createFlower() {
    let flower = {
        x: random(0, 720),
        y: random(250, 500),
        size: random(20, 100),
        lifespan: random(255, 300),
        color: color(random(255), random(255), random(255)),
    };
    return flower;
}

function drawFlower(flower) {
    noStroke();
    fill(flower.color);

    ellipse(flower.x, flower.y, flower.size / 2, flower.size);
    ellipse(flower.x, flower.y, flower.size, flower.size / 2);
    fill(255, 255, 120);
    circle (flower.x, flower.y, flower.size / 2);
}
//until here

