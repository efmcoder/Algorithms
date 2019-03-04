//When a constructor function creates a new object, that new object is said to be an INSTANCE OF its constructor.
//instanceof() checks for this
let Bird = function(name, color, numLegs){
  this.name = name;
  this.color = color;
  this.numLegs = numLegs;
}

let crow = new Bird("Alexis", "black", 3);
console.log(crow);
console.log(crow instanceof Bird); //Answer = true


//FREECODECAMP EXAMPLE:
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(3);
console.log(myHouse instanceof House);
