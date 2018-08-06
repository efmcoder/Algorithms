//A space between " " counts the number of times each WORD appears
//No space between "" counts the number of times each LETTER appears
function harmlessRansomNote(noteText, magazineText){
  var noteArr = noteText.split(" ");
  var magazineArr = magazineText.split(" ");
  var magazineObj = {};

  //magazineArr.forEach(word => { THIS CAN ALSO BE USED INSTEAD OF NEXT LINE
  magazineArr.forEach(function(word) {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  console.log(magazineObj);

}
harmlessRansomNote(" ", "this is all the magazine text in the magazine");

//Answer when you call: node harmlessRansomNote.js :
//{this: 1, is: 1, all: 1, the: 2, magazine: 2, text:1, in:1}
//All the codes now work
