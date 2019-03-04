//BIRD AND DOG BELOW BOTH HAVE THE "DESCRIBE" FUNCTION, THUS REPEATING OURSELVES.
//We can create a supertype (parent) called Animal to hold this prototype for all others
function Bird(name){
  this.name = name;
}
Bird.prototype = {
  constructor: Bird,
  /*describe: function() {
    console.log("My name is " + this.name);*/
  //}
};

function Dog(name){
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  /*describe: function() {
    console.log("My name is " + this.name);*/
  //}
};


//since Animal now has the describe meethod, we can remove this method from Bird and Dog
function Animal(){};
Animal.prototype = {
  constructor: Animal,
  describe: function(){
    console.log("My name is " + this.name);
  }
};
