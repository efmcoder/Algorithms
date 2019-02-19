function largestArray(myArray) {
var largestArrayIndex = [0,0,0];
//whole thing is called myArray
//outer loop/array is called arrayIndex
//inner loop/array is the subArrayIndex
//var arrays;
//var subArrayIndex;
for (var arrays = 0; arrays < myArray.length; arrays++){

//iterate through the inner loop
for (var subArrayIndex = 0; subArrayIndex < myArray[arrays].length; subArrayIndex++){

//conditions in the inner loop
if (myArray[arrays][subArrayIndex] > largestArrayIndex[arrays]){
  largestArrayIndex[arrays] = myArray[arrays][subArrayIndex];


}
}
}
return largestArrayIndex;
}
console.log(largestArray([[1,2,3], [4,5,6], [7,8,9]]));
