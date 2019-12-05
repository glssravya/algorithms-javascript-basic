function caesarCipher(string,num){
	num = num%26;
	let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
	let strArr = string.toLowerCase().split("");
	let newStr = '';
	let position;
	for(let i=0;i<string.length;i++){
		if(strArr[i]===" "){
			newStr+= " ";
			continue;
		}
		position = alphabets.indexOf(strArr[i])+num;
		if(position>26) position -=26;
		if(position<0) position+=26;
		if(string[i] === string[i].toUpperCase())
			newStr+=alphabets[position].toUpperCase()
		else
			newStr+=alphabets[position];
	}
	return newStr;
	
}
console.log('*************CaesarCipher**********')
console.log(caesarCipher('Zoo Keeper',2));
console.log('*************CaesarCipher END**********')	
