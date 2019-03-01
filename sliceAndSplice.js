//use array methods slice and splice to copy each elmeent of first array into second array in order

function combineArrays(arr1, arr2, n){

  let localArray = arr2.slice();
  for (let i = 0; arr1.length; i++) {
    localArray.splice(n,0,arr1[i]);
    n++
  }
  return localArray;

}
console.log(combineArrays([1,2,3], [4,5,6]));
