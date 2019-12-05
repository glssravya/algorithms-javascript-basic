function erathosthenes(num){
	let primeArr = [];
	for(var i=1;i<num;i++){
		primeArr[i] = true;
	}
	primeArr[1] = false;
	let sqrtNum = Math.floor(Math.sqrt(num));
	for(let j=2;j<=sqrtNum;j++){
		for(let k=2;j*k<num;k++){
			primeArr[j*k] = false;
			
		}
	}
	var primaryNum = [];
	for(i=1;i<primeArr.length;i++){
		if(primeArr[i]){
			primaryNum.push(i)
		}
	}
	return primaryNum;
}
console.log('************Erathosthenes*********');
console.log(erathosthenes(200));
console.log('***********Erathosthenes END*******');