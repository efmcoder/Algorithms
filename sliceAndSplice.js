//use array methods slice and splice to copy each elmeent of first array into second array in order

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
