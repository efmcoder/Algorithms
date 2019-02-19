console.log(Math.max(4,5,1,3));

function largestOfFour(arr){
  //for (var i = 0; i < arr.length; i++) {
    //arr[i]
    var results = [];
    for (var n = 0; n < arr.length; n++) {
      var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    results[n] = largestNumber;
    }

  return results;
  //return arr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26],
  [32, 35, 37, 39], [1000, 1001, 857, 1]]));
