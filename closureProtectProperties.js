//Simplest way to make properties private is by creating a variable within the constructor function
//this changes the scope of that variable to be within the constructor function vs available globally

function Bird(){
  let hatchedEgg = 10;

  this.getHatchedEggcount = function(){ //method is publicly available
    return hatchedEgg;
  };
}

let ducky = new Bird();
ducky.getHatchedEggcount(); //has access to the variable


//QUESTION
//Not quite sure I understand what this code is supposed to do
function Birdie(){
  let weight = 15;

  this.getWeight = function(){
    return weight;
  };
}
