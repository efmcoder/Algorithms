/*function truncateString (str, num) {

  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + "...";
  }
  else if (str.length > num && num <= 3) {
    return str.slice(0, num) + "...";
  }
  else {
    return str;
  }

}
console.log(truncateString("Please pass me the salt", 9));*/

function truncateString (str, num) {

  if (str.length > num) {
    return str.slice(0, (num)) + "...";
  }
  else {
    return str;
  }

}
console.log(truncateString("Please pass me the salt", 1));
