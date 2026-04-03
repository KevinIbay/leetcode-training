class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanString = s.replaceAll(/[^a-zA-Z0-9]/g, '');

        return cleanString.toLowerCase() === cleanString.toLowerCase().split('').reverse().join('');
    }
}
