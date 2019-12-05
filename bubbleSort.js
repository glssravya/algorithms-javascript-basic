function bubbleSort(arr){
	for(let i=1;i<arr.length-1;i++){
		for(let j=0;j<arr.length-1;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}
let bubbleArr = [5,3,4,1,2,6];
console.log('************BubbleSort*********');
console.log(bubbleSort(bubbleArr));
console.log('***********BubbleSort END*******');