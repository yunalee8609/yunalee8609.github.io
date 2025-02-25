var kitty = {
    cute: true,
    hungry: 0.8,
    lives: 9,
    fur: {
            fluffy:true,
            colour: "red",
    },
    threats: null,
    meow: function meow(){ //a function contained as a key value pair of an object is called method
        return "meow";
    },  // annonymous funtions have no name 
};

console.log(kitty.meow());  // ()function invokation operator

console.log(kitty.two);
//variable name that is not declared gives an error
// a undeclared parameter of an object give undefined and no error

kitty.lives++;
console.log(kitty);

kitty.two= "two"; // object are changeable and mutable (you can add to them after they are created)
console.log(kitty);

// kitty.travel(); // error because you can invoke undefined as a funtion

console.log(kitty.future++);

console.log(kitty.lives / null );
// . accessor of an object
kitty.fur.fluffy;


if(kitty.cute){
    console.log('true?');
}else{
    console.log('false?');
}

for(key in kitty){
    console.log(key);
    kitty
}

var x = {}; //empty objects
x.y = 12; //mutates objects with assignment
x.z; // returns undefined
x.z(); // throws and error by trying to invoke undefined as a function 
x.z = function(){};  // method
x.z(); // invoke the z method and returns undefined unless modified


