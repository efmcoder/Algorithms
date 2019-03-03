function indexInsert (arr, num){
  arr.sort(function(a,b) {
    return a - b;
  })

for (var a = 0; a < arr.length; a++) {
  if (arr[a] >= num)
  return a;
}
return arr.length;
}

console.log(indexInsert([5,8,1,6], 7));
