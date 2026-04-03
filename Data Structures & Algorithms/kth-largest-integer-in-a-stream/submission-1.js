class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.arr = nums;
        this.arr.sort((a, b) => a - b);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.arr.push(val);
        this.arr.sort((a, b) => a - b);
        let index = this.arr.length - this.k;
        return this.arr[index];
    }
}
