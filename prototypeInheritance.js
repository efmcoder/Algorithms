function Animal(){}
Animal.prototype.eat = function(){
  console.log("nom nom nom manja");
};

function Dog(){}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function (){
  console.log("Woof woof!");
};

let beagle = new Dog();
beagle.eat();
beagle.bark();
