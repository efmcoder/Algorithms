//When a constructor function creates a new object, that new object is said to be an INSTANCE OF its constructor.
//instanceof() checks for this
let Bird = function(name, color){
  this.name = name;
  this.color = color;
  this.numLegs = numLegs;
}

let crow = new Bird("Alexis", "black", 3);
console.log(crow);
