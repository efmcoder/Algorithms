let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {
    return "The name of the duck is " + duck.name;
  }
}
console.log(duck.sayName());


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


let school = {
  schoolName: "Princeton",
  location: "New Jersey",
  stateSchool: function(){
    return "I go to " + this.schoolName + " University."; //this keyword refers to the object in which schoolName appears
  }
}
console.log(school.stateSchool());
