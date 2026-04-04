class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";
        for (let s of strs){
            output += s.length + "#" + s;
        }
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let output = [];
        let left = 0;
        while (left < str.length) {
            let right = left;
            while (str[right] !== '#') {
                right++;
            }
            let length = parseInt(str.substring(left, right)); 
            left = right + 1; 
            right = left + length; 
            output.push(str.substring(left, right));
            left = right;
        }
        return output;
    }
}
