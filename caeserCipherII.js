//Preferable to declare variables separately outside of the code
function caeserCipher(str, num)
{
  num = num % 26;
  var lowerCaseLetters = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var newString = "";
	var i;
	var currentLetter;
	var currentIndex;
	var newIndex;

  for (i = 0; i < lowerCaseLetters.length; i++)
  {
    currentLetter = lowerCaseLetters[i];
    if(currentLetter == " ") //space btw quotes to follow space between the words you want to cipher
    {
      newString += currentLetter;
      continue;
    }
    currentIndex = alphabet.indexOf(currentLetter);
    newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] == currentLetter.toUpperCase())
    {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  }
  return newString;
}
console.log(caeserCipher("Java Script", -900));
