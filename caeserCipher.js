function caeserCipher(str, num)
{
  num = num % 26;
  var lowerCaseLetters = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseLetters.length; i++)
  {
    var currentLetter = lowerCaseLetters[i];
    if(currentLetter == ' ')
    {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    // comment out my code for non uppercase
    // if (newIndex > 25) newString += alphabet[newIndex - 26];
    // else if (newIndex < 0) newString += alphabet[newIndex + 26];
    // else newString += alphabet[newIndex];
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

caeserCipher('Zoo Keeper', 2);
caeserCipher("Bee Master", 2);
