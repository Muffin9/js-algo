/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const result = [];
    
    const recur = (idx, currTargetArr) => {
        const currentSum = currTargetArr.reduce((prev, cur) => cur += prev, 0);
        if(currentSum > target) return;

        if(currentSum === target) {
            result.push(currTargetArr);
            return;
        }

        for(let i = idx; i < candidates.length; i++) {
            const newArr = [...currTargetArr, candidates[i]];
            recur(i, newArr);
        }
    }
    
    recur(0, []);
    return result;
};

combinationSum([2,3,6,7], 7)