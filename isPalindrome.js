
//A space between " " counts the number of times each WORD appears
//No space between "" counts the number of times each LETTER appears
function isPalindrome(string){
  string = string.toLowerCase();
  var charactersArr = string.split(" "); //1st array has all characters including punctuation & spaces
  //ignore any character not a letter
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split(" "); //2nd array is only the alphabet

//BLOCK CODE BELOW SAYS: CHECK THE FIRST LETTER (index 0) and if it's part of our valid characters, push it into
//the lettersArry.
//If it's not one of our valid characters, return a -1 = invalid

//i. Create letters array in which to place only the characters from our CharacterArr
var lettersArr = [];
//ii. remove any character not a letter e.g., numbers USE A FOR-EACH LOOP
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
if (lettersArr.join(" ") === lettersArr.reverse().join(" ")) return true;
else return false;
}
console.log(isPalindrome("Madam, I'm Adam"));
