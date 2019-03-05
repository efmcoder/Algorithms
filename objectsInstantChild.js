function Animal(){}
  Animal.prototype = {
    constructor: Animal,
    eat: function(){
      console.log("nom nom");
    }
  };

function Dog(){}
Dog.prototype = {
  constructo: Dog,
  eat: function(){
    console.log("nom");
  }
}
let beagle = new Dog();
console.log(beagle.eat());
