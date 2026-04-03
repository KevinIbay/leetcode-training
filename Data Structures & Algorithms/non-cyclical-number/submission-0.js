class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = new Set();
        while(!seen.has(n)){
            seen.add(n);
            n = this.sumOfSquares(n);
            if (n === 1){
                return true;
            }
        }

        return false;
    }

    sumOfSquares(n){
        let total = 0;
        while(n > 0){
            total += Math.pow(n % 10, 2);
            n = Math.floor(n/10);
        }
        return total;
    }
}
