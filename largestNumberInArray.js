console.log(Math.max(4,5,1,3));
//the above doesn't work for arrays, so see below
var num  = [4,5,1,3];
console.log(Math.max.apply(null, num));
