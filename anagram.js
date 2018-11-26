function isAnagram(text, note)
{
  var textArr = text.split(" ");
  var noteArr = note.split(" ");
  //var textObj = {};
  var textObj = {};
  var noteObj = {};
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split(" ");

  /*textArr.forEach(function(word){
    if(!textObj[word]) textObj[word] = 0;
    textObj[word]++;
});
  noteArr.forEach(function(word){
    if(!noteObj[word]) noteObj[word] = 0;
    noteObj[word]++;
});*/

textArr.forEach(function(word){
  if(validCharacters.indexOf(char) > -1) textArr.push(char);
});

noteArr.forEach(function(word){
  if(validCharacters.indexOf(char) > -1) noteArr.push(char);
});

//var Anagram = true;
if(textArr.join("") === noteArr.join("")) /*return true;
else return false;
}

textArr.forEach(function(word){
  if(noteObj[word]){
    noteObj[word]--;
    if(noteObj[word]<0) */Anagram = true;
/*  }
  else Anagram = false;
});*/
return Anagram;

//  console.log(textObj,noteObj);
}
console.log(isAnagram("teacher", "cheater"));
