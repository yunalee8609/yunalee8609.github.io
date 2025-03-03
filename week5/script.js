var colourPicker; // function scope 
let strokeWeightSlider;
var bgColourPicker;
var bgColourButton;


function setup(){
    createCanvas(720,480);
    colourPicker = createColorPicker('deeppink');
    
    strokeWeightSlider = createSlider(1,10,5,1);
    
    bgColourPicker = createColorPicker('lime');
    
    var bgColourButton = createButton('Repaint!');
    bgColourButton.mousePressed(repaint);
    bgColourPicker.changed( repaint );
    background( bgColourPicker.value() );
}

function draw(){
    //ellipse(mouseX, mouseY, 10,10);
    strokeWeight(strokeWeightSlider.value() );
    stroke(colourPicker.value());

    //copied from p5js.org/reference/mouseispressed/
    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    /// end remix
}

function repaint(){
    background(bgColourPicker.value());

    for (let i = 0; i < 10; i++) { 
        fill(random(255), random(255), random(255), 150); 
        noStroke();
        ellipse(random(width), random(height), random(20, 80));
    }
}