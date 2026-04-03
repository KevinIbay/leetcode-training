class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const seen = new Set();
        for(let i = 0; i < nums.length; i++){
            if (seen.has(nums[i])){
                seen.delete(nums[i]);
            } else {
                seen.add(nums[i]);
            }
        }
        return Array.from(seen)[0];
    }
}
