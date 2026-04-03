class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let output = 0;
        for (let n of nums){
            output = output ^ n;
        }
        return output;
    }
}
