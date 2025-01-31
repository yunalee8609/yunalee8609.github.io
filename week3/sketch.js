

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('pink');
    fill('lightblue');
    stroke('white');
    for(var i = 0; i < 500; i++){
        rect((i*234)%width,(i*55298)%height,30,24,30);
    }
    fill ('#CCCCFF');
    stroke(0,0);
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX,mouseY,50,50,25);
    }
}
