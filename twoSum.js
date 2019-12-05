//o(n^2) complexity
function twoSum(arr,sum){
	let arrPairs = []
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			if(arr[i]+arr[j] == sum){
				arrPairs.push([arr[i],arr[j]]);
			}
		}
	}
	return arrPairs;
}
//O(n) complexity
function twoSumON(arr,sum){
	let pairs = [];
	let hashTable = [];
	let currentNum = counterPart = 0;
	for(let i=0;i<arr.length;i++){
		currentNum = arr[i];
		counterPart = sum-currentNum;
		if(hashTable.indexOf(counterPart)!=-1)
			pairs.push([currentNum,counterPart])
		hashTable.push(currentNum);
	}
	return pairs
}
console.log('*********Two Sum ************')
let sumArr = [40,11,19,17,-12]
console.log(twoSum(sumArr,28));
console.log(twoSumON(sumArr,28));
console.log('**********Two Sum End ************');
