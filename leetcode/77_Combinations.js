/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    const recur = (arr, idx) => {
        if(arr.length === k) {
            result.push(arr);
            return;
        }

        for(let i = idx; i <= n; i++) {
            recur([...arr, i], i + 1);
        }
    }

    recur([], 1);
    console.log(result);
};

combine(4, 2);