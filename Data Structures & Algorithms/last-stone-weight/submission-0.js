class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1){
            stones.sort((a,b) => a-b);
            let smashedStones = stones.pop() - stones.pop();
            if (smashedStones){
                stones.push(smashedStones);
            }
        }

        return stones.length ? stones[0] : 0;
    }
}
