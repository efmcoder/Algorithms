function falseValueBouncer(arr){
  return arr.filter(Boolean);
}

console.log(falseValueBouncer([7, "hello", "", false, true, 9, "x"]));
//Answer: 7, "hello", true, 9, "x"
