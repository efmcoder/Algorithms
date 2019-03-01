function titleCase(str){

//lowercase the entire string
//Replace every word's first letter to uppercase using .replace
//using Regex code:
//i. find all non-whitespace characters \S
//ii. at the beginning of string ^
//iii. or after any whitespace character \s
//iv. g (global) modifier applies parameters to entire string

      return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());

}
console.log(titleCase("her name is jane"));




/*var str = "how are you?";
var str2 = str.split(" "); //splits at entire word level
var str3 = str.split(""); //splits at letter level
console.log(str2);
console.log(str3);*/
