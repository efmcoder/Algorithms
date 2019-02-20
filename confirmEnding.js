//check if a string ends with the given argument
//check if a string (str = first argument) ends with the second argument (target)
//use .endsWith() method
function confirmEnding(str, target){
  return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("We are getting married", "married"));
