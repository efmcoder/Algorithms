function caesarCipher(str, num) {
	num = num % 26;
	var lowerCaseString = str.toLowerCase();
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split(" ");
	var newString = " ";
	var i;
	var currentLetter;
	var currentIndex;
	var newIndex;
	for(i = 0; i<lowerCaseString.length; i++) {
		currentLetter = lowerCaseString[i];
		if (currentLetter === " ") {
			newString += currentLetter;
			continue; }
		currentIndex = alphabet.indexOf(currentLetter);
		newIndex = currentIndex + num;
		if (newIndex > 25) newIndex = newIndex - 26;
		if (newIndex < 0) newIndex = newIndex + 26;
		/*if (str[i] === str[i].toUpperCase() )
		{
		newString += alphabet[newIndex].toUpperCase();
    }*/
		else newString += alphabet[newIndex]; }
	return newString; }

caesarCipher("zoo keeper", 2);
//console.log("hello World");
