/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positive = nums.filter(num => num > 0);
    let negative = nums.filter(num => num < 0);
    const arr = [];
    for(let i = 0; i < nums.length / 2; i++) {
        arr.push(positive[i], negative[i]);
    }
console.log(arr);
};

rearrangeArray([3,1,-2,-5,2,-4]);