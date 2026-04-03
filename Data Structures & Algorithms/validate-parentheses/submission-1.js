class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parenMap = new Map([
            ['}', '{'],
            [']', '['],
            [')', '(']
        ]);

        const stack = [];

        for(let i = 0; i < s.length; i++){
            
            if(parenMap.has(s[i])){
                if (stack.pop() !== parenMap.get(s[i])) {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }
        
        return stack.length === 0;
    }
}