function mean(arr){
	let sum = 0;
	for(let i=0;i<arr.length;i++){
		sum += arr[i];
	}
	return sum/arr.length;
}
function median(arr){
	let sortArr = arr.sort(function(a,b){
		return a-b;
	});
	console.log(sortArr);
	if(arr.length%2==1){
		median = arr[Math.floor(arr.length/2)];
	}else{
		median = (arr[arr.length/2]+arr[(arr.length/2)-1])/2;
	}
	return median;
}
function mode(arr){
	let modeObj = {};
	for(let i=0;i<arr.length;i++){
		num = arr[i];
		if(!modeObj[num])
		 modeObj[num]=1;
		else
		 modeObj[num]++;
	}
	let keys = Object.keys(modeObj);
	let values = Object.values(modeObj);
	let maxIndex = Math.max(...values);
	let modeMax = keys[maxIndex];
	let modes = [];
	for(k in modeObj){
		if(modeObj[k]=== maxIndex){
			modes.push(k)
		}
	}
	if(modes.length == keys.length)
		modes = [];
	return modes;

}
function meanMedianMode(arr){
	let modeVal = mode(arr);
	let medianVal = median(arr);
	let meanVal = mean(arr);
	return {'mean':meanVal,'median':medianVal,'mode':modeVal};
}
let array = [9,10,23,10,23,9];
console.log('*************Mean-Median-Mode**********')
console.log(meanMedianMode(array));
console.log('*************Mean-Median-Mode END**********')	
