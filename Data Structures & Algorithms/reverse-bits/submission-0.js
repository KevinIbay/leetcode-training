class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let output = 0;

        for (let i = 0; i < 32; i++){
            const bit = (n >>> i) & 1;
            output += bit << (31 - i);
        }

        return output >>> 0;
    }
}
