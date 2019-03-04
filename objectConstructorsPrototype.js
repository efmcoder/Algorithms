//FCC
/*function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}*/

//FCC: Object Oriented Programming: Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line
  constructor: Dog,
  numLegs: 3,
  eat: function(){
    console.log("manja manja manja");
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
};
