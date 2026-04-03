class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        const nString = n.toString(2).split('');
        let count = 0;

        console.log(nString);

        for(let i = 0; i < nString.length; i++){
            if (nString[i] === "1"){
                count += 1;
            }
        }

        return count;
    }
}
