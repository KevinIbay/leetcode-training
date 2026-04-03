class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedMap = new Map();
        for(let s of strs){
            const sortedS = s.split("").sort().join("");
            if(!sortedMap.has(sortedS)){
                sortedMap.set(sortedS, []);
            }
            sortedMap.get(sortedS).push(s);
        }
        return [...sortedMap.values()];
    }
}
