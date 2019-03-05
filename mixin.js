//behavior is shared through inheritance
//inheritance does not work well for unrelated objects like Bird and Airplane. Though both can fly, a bird is not a type of Airplane
//for unrelated objects, it's better to use mixins
//a mixin allows other objects to use a collection of functions
let flyMixin = function (obj){
  obj.fly = function(){
    console.log("Flying, whoosh!");
  }
};
//The flyMixin takes any object and gives it the fly method

let bird = {
  name: "Donald",
  numLegs: 3
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();

//QUESTION
let birds = {
  name: "Donald Duck",
  numberLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
//BELOW IS THE NEEDED CODE TO CREATE THE MIXIN
let glideMixin = function(obj){
  obj.glide = function(){
    console.log("I can glide, wacha tu!");
  }
};

glideMixin(birds);
glideMixin(boat);

birds.glide();
boat.glide();
