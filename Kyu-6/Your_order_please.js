function order(words) {
	wordList = words.split(" ");
	wordsSorted = "";
	for (var i = 1; i < 10; i++) {
		for (var j = wordList.length - 1; j >= 0; --j) {
			if (wordList[j].indexOf(i) + 1) {wordsSorted += wordList.splice(j,1) + " "}
		}
	}
	return wordsSorted.replace(/\s*$/,"");
}
