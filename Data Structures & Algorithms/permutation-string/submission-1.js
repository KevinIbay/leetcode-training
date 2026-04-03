class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        let right = s1.length;
        const sortedS1 = s1.split('').sort().join('');
        while(right <= s2.length){
            if(sortedS1 === s2.substring(left, right).split('').sort().join('')){
                return true;
            }
            left += 1;
            right += 1;
        }
        return false;
    }
}
