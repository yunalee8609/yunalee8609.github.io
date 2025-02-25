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

var oyster;
         
oyster = 3.5;

console.log("the cost of each oyster was " + oyster );

