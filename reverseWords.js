function reverseWords(string){
	let stringArr = string.split(" ");
	let revWordStr = [];
	stringArr.forEach(word => {
		revWordStr.push(reverse(word));
	})
	return revWordStr.join(" ");
}
function reverse(str){
	let newStr="";
	for(var i=str.length-1;i>=0;i--){
		newStr+=str[i];
	}
	return newStr;
}
console.log('*************ReverseWords**********')
console.log(reverseWords('This is a StRing Of Words'));
console.log('*************ReverseWords END**********')	
