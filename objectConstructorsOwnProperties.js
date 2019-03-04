let Bird = function(name){
  this.name = name;
  //this.numLegs = numLegs; //remove it from being an own property to become a prototype property: THIS IS AN OWN PROPERTY
}
Bird.prototype.numLegs = 2; //this is a prototype property
let duck = new Bird("Donald");
let canary = new Bird("Tweety");
console.log(duck, canary);


//I don't understand what this is supposed to be doing. Is "hasOwnProperty" a JavaScript keyword?
let ownProps = []; //i. Define a variable that will be an object []
for (let property in duck){
  if(duck.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
console.log(ownProps);

//FCC Example
function Dog(name, numLegs) {
  this.name = name;
}

Dog.prototype.numLegs = 2;
let beagles = new Dog("Snoopy");
console.log(beagles);


//FCC Example
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Scooby Doo");

let ownPropss = [];
let prototypeProps = [];

// Add your code below this line

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownPropss.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(beagle);
