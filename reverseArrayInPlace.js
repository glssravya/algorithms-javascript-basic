function reverseArrayInPlace(arr){
	let temp;
	let i=0;j=arr.length-1;
	for(let i=0,j=arr.length-1;i<=j;i++,j--){
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}
let arr = ['sravya','Dharvi','swaroop'];
console.log('*************ReverseArrayInPlace**********')
console.log(reverseArrayInPlace(arr));
console.log('*************reverseArrayInPlace END**********')	
