//To change to lower case. Not really working
var str = "HELLO WORLD";
str = str.replace
(
  /([A-Z]) ([A-Z]+)/g,
  /*g = anonymous generator*/
function (a, w1, w2)
{
  return w1 + " " + w2.toLowerCase();;
}
);
console.log(str);

//To change to upper case
  var mystr = "Hello World";
  mystr = mystr.toUpperCase();
  console.log(mystr);
