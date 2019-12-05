function isPalindrome(string){
	string = string.toLowerCase();
	let charArr = string.split("");
	let validChars = 'abcdefghijklmnopqrstuvwxyz'.split("");
	let lettersArr = [];
	charArr.forEach(char => {
		if(validChars.indexOf(char) > -1) lettersArr.push(char);
	});
	if(lettersArr.join("") === reverse(lettersArr.join(""))) return true;
	else return false;
}
function reverse(string){
	let revStr = "" ;
	for(let i=string.length-1;i>=0;i--){
		revStr += string.charAt(i);
	}
	return revStr;
}
console.log('*************IsPalindrome**********')
let str = "sravya i'm Adam";
console.log(isPalindrome(str));
let str1 = "Madam i'm Adam";
console.log(isPalindrome(str1));

console.log('*************IsPalindrome END**********')	
