function fizzBuzz(num)
{
  for(var i = 1; i <= num; i++)
  {
    if(i % 15 != 0)
    console.log("fizzBuzz");

    else(i % 3 === 0)
    console.log("fizz");

    else (i % 5 === 0)
    console.log("buzz")

    else console.log(i);

  }
}
fizzBuzz(10);
