class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length;

        while(left < right){
            if(!this.isAlphaNum(s[left])){
                left++;
                continue;
            }
            if(!this.isAlphaNum(s[right])){
                right--;
                continue;
            }

            if(s[left].toLowerCase() === s[right].toLowerCase()){
                left++;
                right--;
            } else {
                return false;
            }
        }

        return true;
    }

    isAlphaNum(c){
        return /^[a-z0-9]$/i.test(c);
    }
}
