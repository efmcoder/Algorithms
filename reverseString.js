function reverseString(str) {
  return str.split("").reverse().join("").toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());

}
console.log(reverseString("welcome to Boston"));
