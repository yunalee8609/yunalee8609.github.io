var redBrick = {
    x:0,
    y:0,
    w:60,
    h:20,
    xSpeed: 1,
    ySpeed: 1,
    colour: 'blue',
    draw: function(){
        fill( this.colour );
        rect( this.x, this.y ,this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var blueBrick = {
    x:40,
    y:50,
    w:30,
    h:30,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'green',
    draw: function(){
        fill( this.colour );
        rect( this.x, this.y ,this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and then returns.

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('pink');
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
}

