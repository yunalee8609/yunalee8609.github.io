var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('orange') //automatic semicolon insertion
    rect(x,y,20,20,20);
    x = x + 1;
    x = x  % 500; //modulo operator
    y = y + 4;
    y = y % 600;
}
