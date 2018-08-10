function isAnagram(text, note)
{
  var textArr = text.split("");
  var noteArr = note.split("");
  //var textObj = {};
  var textObj = {};
  var noteObj = {};

  textArr.forEach(function(word){
    if(!textObj[word]) textObj[word] = 0;
    textObj[word]++;
});
  noteArr.forEach(function(word){
    if(!noteObj[word]) noteObj[word] = 0;
    noteObj[word]++;
});

var Anagram = true;
textArr.forEach(function(word){
  if(noteObj[word]){
    noteObj[word]--;
    if(noteObj[word]<0) Anagram = false;
  }
  else Anagram = false;
});
return Anagram;

  console.log(textObj,noteObj);
}
console.log(isAnagram("dog", "cat"));
