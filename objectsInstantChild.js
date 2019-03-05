function Animal(){}
  Animal.prototype = {
    constructor: Animal,
    eat: function(){
      console.log("nom nom");
    }
  };

//CODE BELOW HAS DOG INHERITING FROM ANIMAL
function Dog(){}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
