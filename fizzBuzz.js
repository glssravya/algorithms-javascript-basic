function fizzbuzz(number){
	for(let num=1;num<=number;num++){
		if(num%15==0) console.log("fizzBuzz")
		else if(num%3==0) console.log("fizz")
		else if(num%5==0) console.log("Buzzz")
		else 
			console.log(num);
	}
}
console.log('*************FizzBuzz**********')
fizzbuzz(15);
console.log('*************FizzBuzz END**********')
