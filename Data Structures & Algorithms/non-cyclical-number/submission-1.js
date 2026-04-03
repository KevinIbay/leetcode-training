class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seenSums = new Set();
        while(!seenSums.has(n)){
            seenSums.add(n);
            n = this.sumOfSquares(n);            
            if(n === 1){
                return true;
            }
        }
        return false;
    }

    sumOfSquares(n){
        let total = 0;
        while(n > 0){
            let onesDigit = n % 10; // get the right most digit
            total += Math.pow(onesDigit, 2);
            n = Math.floor(n / 10); // truncate the right most digit
        }
        return total;
    }
}
