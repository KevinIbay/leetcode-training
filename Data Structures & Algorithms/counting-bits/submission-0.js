class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let output = [];

        for(let i = 0; i <= n; i++){
            let numToBinaryStringArr = i.toString(2).split("");
            let count = 0;
            for(let j = 0; j < numToBinaryStringArr.length; j++){
                if(numToBinaryStringArr[j] === "1"){
                    count += 1;
                }
            }
            output.push(count);
        }

        return output;
    }
}
