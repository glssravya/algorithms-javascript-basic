function binarySearch(arr,key){
	var middle = Math.floor(arr.length/2);
	if(arr[middle]==key)
		return true;
	else 
		if(key>arr[middle] && arr.length>1)
		return binarySearch(arr.splice(middle,arr.length),key);
	else 
		if(key<arr[middle] && arr.length>1)
		return binarySearch(arr.splice(0,middle),key);
	else 
		return false;
	

}
console.log('************BinarySearch*********');
let binArr = [5,6,7,8,9,10,11,12,14,15];
let key = 6;
console.log(binarySearch(binArr,key));
console.log('***********BinarySearch END*******');