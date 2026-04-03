class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2){
            return n;
        }

        let twoStepsBack = 1;
        let oneStepBack = 2;
        let current;

        for(let i = 3; i <= n; i++){
            current = twoStepsBack + oneStepBack;

            // move forward
            twoStepsBack = oneStepBack;
            oneStepBack = current;
        }

        return current;
    }
}
