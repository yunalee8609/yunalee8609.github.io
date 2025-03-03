var tada;
var button;
var button2;
var mystring = 'hello';
var numberOfClicks = 0;


function setup(){
    createCanvas(windowWidth, windowHeight);
    tada = createAudio('birds-chirping.mp3');
    button = createButton('click me');
    button.position(49,153);
    button.hide();

    button2 = createButton('no click me');
    button2.position(200, 10);
    button2.hide();
    button2.mousePressed(function(){
        button2.hide();
        button.show();
        numberOfClicks++;
        sillything();
    })

    //object callback
    button.mousePressed(function(){
        //tada.play();
        button2.show();
        button.hide();
        numberOfClicks++;
        sillything();
    });
}

function draw(){
    background("lightblue");
        if(mouseIsPressed){//event polling
        background("lavender");
        //tada.play();
    }
    ellipse(mouseX, mouseY, 10, 10);
    text(numberOfClicks, 100, 100);
}

//global callback
function mousePressed(){
    //tada.play();
    // set mystring to a different message
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    button.show();
}

function sillything(){
    if(numberOfClicks > 10){
        tada.play();
    }
}