
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfitValue=0;

    for(let i=0;i<prices.length;i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }

        if(prices[i]-minPrice>0 && prices[i]-minPrice > maxProfitValue){
            maxProfitValue = prices[i]-minPrice
        }

        console.log(minPrice, maxProfitValue);
    }

    return maxProfitValue;
};

let prices = [7,1,5,3,6,4];
const res = maxProfit(prices);