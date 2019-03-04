function Dog(name){
  this.name = name;
}
let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));


function Dogs(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dogs.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dogs.prototype);
