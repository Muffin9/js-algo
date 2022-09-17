/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const smallerArr = nums.filter((num) => num < pivot);
    const samePivot = nums.filter((num) => num === pivot);
    const biggerArr = nums.filter((num) => num > pivot)
    console.log([...smallerArr, ...samePivot, ...biggerArr]);
};

pivotArray([9,12,5,10,14,3,10], 10);
pivotArray([-3, 4, 3, 2], 2);