//i. To change to lower case.
var str = "HELLO WORLD";
str = str.toLowerCase();
console.log(str);

//ii. Code below not working
/*str = str.replace
(
  /([A-Z]) ([A-Z]+)/g,
  //g = anonymous generator
function (a, w1, w2)
{
  return w1.toLowerCase + " " + w2.toLowerCase();;
}
);
console.log(str);


iii. To change to upper case. This is working*/
var mystr = "Hello World";
  mystr = mystr.toUpperCase();
  console.log(mystr);
