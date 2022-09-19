/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const len = nums.length;
    const visited = new Array(len);
    const result = [];
    const recur = (arr) => {
        if(arr.length === len) {
            result.push(arr);
            return;
        }
        for(let i = 0; i < len; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            recur([...arr, nums[i]]);
            visited[i] = false;
        }
    }

    recur([]);
    console.log(result);
};

permute([1, 2, 3]);
permute([0, 1]);