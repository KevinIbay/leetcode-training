class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Number.MAX_VALUE;
        let maxProfit = 0;

        for (let price of prices){
            // find the cheapest buy price
            if (price < minPrice){
                minPrice = price;
            }

            // calculate profit if sold at current price
            const currentProfit = price - minPrice;
            
            // update max profit if we found a better sell price
            if (currentProfit > maxProfit){
                maxProfit = currentProfit;
            }
        }

        return maxProfit;
    }
}
