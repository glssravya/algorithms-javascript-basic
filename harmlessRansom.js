function harmlessRansom(note,magazineText){
	let noteArr = note.split(" ");
	let magArr = magazineText.split(" ");
	let magArrObj = {};
	magArr.forEach((word) => {
		(!magArrObj[word]) ? magArrObj[word]=1 : magArrObj[word]++;
	});
	notePossible = true;
	noteArr.forEach(word => {
		if(magArrObj[word]){
			magArrObj[word]--;
			if(magArrObj[word]<0){
				notePossible = false;
			}
		}else{
			notePossible = false;
		}
	}) 
	console.log(notePossible);
}
console.log('*************HarmlessRansom**********')
harmlessRansom("This is is","This is a magazine text from a magazine");
console.log('*************HarmlessRansom END**********')	
