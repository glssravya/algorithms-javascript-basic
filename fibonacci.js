function fibonacci(position){
	if(position<3) return 1;
	else 
		return fibonacci(position-1)+fibonacci(position-2);

}
function fibCache(index,cache=[]){
	if(cache[index]) return cache[index];
	else{
		if(index<3) return 1;
		else{
			cache[index] = fibCache(index-1,cache)+fibCache(index-2,cache);
		}
	}
	return cache[index];

}
console.log('************Fibonacci*********');
console.log(fibonacci(5));
console.log(fibCache(50));
console.log('***********Fibonacci END*******');