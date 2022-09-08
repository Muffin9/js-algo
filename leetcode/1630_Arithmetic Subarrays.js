/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const result = [];
    const len = l.length;
    for(let i = 0; i < len; i++) {
        const arr = nums.slice(l[i], r[i] + 1).sort((a , b) => a - b);
        const increaseCount = arr[1] - arr[0];
        let flag = true;
        for(let j = 2; j < arr.length; j++) {
            if(increaseCount !== arr[j] - arr[j - 1]) {
                flag = false;
                result.push(false);
                break;
            }
        }
        if(flag) {
            result.push(true);
        }
    }
    console.log(result);
};

checkArithmeticSubarrays([4,6,5,9,3,7], [0, 0, 2], [2, 3, 5]);
checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10])