function maxStockProfit(arr){
	let maxProfit = -1;
	let buyPrice = 	0;
	let sellPrice = 0;
	changeBuyPrice = true;
	for(let i=0;i<arr.length;i++){
		if(changeBuyPrice) buyPrice = arr[i];
		sellPrice = arr[i+1];
		if(sellPrice<buyPrice){
			changeBuyPrice = true
		}else{
			tempProfit = sellPrice-buyPrice;
			if(tempProfit>maxProfit){
				maxProfit = tempProfit;
			}
			changeBuyPrice = false;
		}
	}
	return maxProfit;

}
let pricesArr = [32,46,26,38,40,48,42];
console.log('************MaxStockProfit*********');
console.log(maxStockProfit(pricesArr));
console.log('***********MaxStockProfit END*******');