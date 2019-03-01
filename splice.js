//splice() changes the contents of an array by removing and replacing existing elements and/or adding new elements

//general code
var months = ["Jan", "March", "April", "June"];
months.splice(1,0,"Feb");
months.splice(4,0,"May");
console.log(months);
