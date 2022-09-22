/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
//     const map = new Map();
//     const result = [];
//     nums.sort();
//     for(let i = 0; i < nums.length; i++) {
//         if(!map.get(nums[i])) {
//             map.set(nums[i], 1);
//         } else {
//             map.set(nums[i], map.get(nums[i]) + 1);
//         }
//     }
//     for(const [key, value] of map) {
//         if(value === 2) result.push(key);
//     }
//     console.log(result);
// };

var findDuplicates = function(nums) {
    const uniqueElements = new Set(nums);
    const filteredElements = nums.filter(item => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
        } else {
            return item;
        }
    });

    console.log(filteredElements);
    return filteredElements;
}


findDuplicates([4,3,2,7,8,2,3,1]);