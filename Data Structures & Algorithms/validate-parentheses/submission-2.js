class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const parensPair = new Map([
            ['}', '{'],
            [']', '['],
            [')', '(']
        ])
        // [()]
        for(let i = 0; i < s.length; i++){
            // check if current item is a closing bracket
            if(parensPair.has(s[i])){
                if(stack.pop() != parensPair.get(s[i]))
                {
                   return false;
                }
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0;

    }
}
