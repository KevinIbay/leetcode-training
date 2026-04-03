class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const sortedNums = nums.sort((a,b) => a-b);
        for(let i = 0; i < sortedNums.length; i++){
            if (i !== sortedNums[i]){
                return i;
            }
        }
        return sortedNums.length;
    }
}
