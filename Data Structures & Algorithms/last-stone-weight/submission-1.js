// import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        stones.forEach(stone => maxHeap.enqueue(stone));

        while(maxHeap.size() > 1){
            let stone1 = maxHeap.dequeue();
            let stone2 = maxHeap.dequeue();

            let remainingStone = stone1 - stone2;
            
            if(remainingStone > 0){
                maxHeap.enqueue(remainingStone)
            }
        }

        return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
    }
}
