class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for(const num of nums){
            if(count.has(num)){
                count.set(num, count.get(num) + 1);
            } else {
                count.set(num, 1)
            }
        }
        const sortedCount = Array.from(count.entries()).sort((a, b) => b[1] - a[1]);
        return sortedCount.slice(0, k).map(pair => pair[0]);
    }
}
