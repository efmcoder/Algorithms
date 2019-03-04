//Constructors are functions that create new objects
//They define properties and behaviors that belong to the new object
//like a blueprint

let residence = {
  state: "Rhode Island",
  city: "Cranston",
  village: "Pawtuxet",
  neighborhood: "Edgewood",
  sayResidence: function(){
    return "I reside in the state of " + residence.state + " in the city of " + residence.city
    + ", the village of " +  residence.village + " in the neighborhood of " + residence.neighborhood;
  }
}
console.log(residence.sayResidence());


//EXAMPLE II:

function Residence(state, city, village, neighborhood) {
  this.state = state;
  this.city = city;
  this.village = village;
  this.neighborhood = neighborhood;
}
//console.log(residence.sayResidence());
let changeResidence = new Residence("Kenya", "Karen", "Duncan", "Wainaina");
console.log(changeResidence);


//Constructors have a capitalized name to distinguish them from other functions that are not Constructors
//Constructors use the keyword "this" to set properties.
//Constructors define properties and behaviors instead of returning a value as other functions do
//Beloww: use a constructor to create objects
function Bird(){
this.name = "Albert";
this.color = "blue";
this.numLegs = 2;
}
let blueBird = new Bird(); //"new" keyword is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird.
//without the "new" operator, "this" inside the constructor would not point to the newly created object, blueBird.
//Now blueBird has all the propertiesinside the Bird constructor
console.log(blueBird.name);

//but if you had a 100 birds, it would take forever to modify all their names, colors, number of legs, etc. So modify the constructor to accept parameters
//then pass in the values to define each bird
function Bird(name, color, numLegs){
  this.name = name;
  this.color = color;
  this.numLegs = numLegs;
}

let cardinal = new Bird("Bruce", "red", 3);
console.log(cardinal);
