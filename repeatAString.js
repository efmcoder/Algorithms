function repeatString(string, times){
  var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }

console.log(repeatString("I love you Duncan. " , 3));

//METHOD 2
console.log("Because I'm happy. ".repeat(2));

//METHOD 3
var chorus = "Because I'm happy too. ";
console.log(chorus.repeat(3));

//METHOD 4: RECURSION
function repeatStringNumTimes(strg, numb) {
  if (numb <= 0)
    return "";//check if number is negative and return zero
  if (numb === 1)
    return strg; //check if # is 1 and return string
  else
    return strg + repeatStringNumTimes(strg, numb - 1);

}
console.log(repeatStringNumTimes("She went to school. ", 2));

//METHOD 5: ADVANCED CODE
function repeatStringNumTimes2(strgg, numm){
  return numm > 0 ? strgg.repeat(numm): "";
}
console.log(repeatStringNumTimes2("Good Morning. ", 2));
