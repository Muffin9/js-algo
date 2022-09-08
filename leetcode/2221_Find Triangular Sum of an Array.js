/**
 * @param {number[]} nums
 * @return {number}
 */
// var triangularSum = function(nums) {
//     if(nums.length === 1) return nums[0];

//     let arr = [...nums];
//     while(true) {
//         if(arr.length === 1) {
//             console.log(arr[0]);
//             return;
//         }
//         const newArr = [];
//         for(let i = 0; i < arr.length - 1; i++) {
//             const newNum = (arr[i] + arr[i + 1]) % 10;
//             newArr.push(newNum);
//         }
//         arr = [...newArr];
//     }
// };

// 다른 사람 풀이
var triangularSum = function(nums) {
    for(let i = nums.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            nums[j] = (nums[j] + nums[j + 1]) % 10;
        }
    }
    console.log(nums[0]);
};



triangularSum([1, 2, 3, 4, 5]);