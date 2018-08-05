function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
        return mid;
    }
  }
 return -1;
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], -1));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 0));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 1));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 2));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 3));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 4));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], -5));
