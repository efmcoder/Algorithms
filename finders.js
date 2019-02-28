//function that looks through an array (loop)
//and returns the first element that passes a truth truncateString
//if no element passes, return undefined

function findElement(arr, truthtest) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i]; //number to be returned is in the array
    if (truthtest (num)) {
      return num;
    }
  }
  return undefined;
}

console.log(findElement([1,2,3,4], num => num % 2 ===0));
