/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    
    let startIdx = 0;
    let endIdx = nums.length - 1; 
    const arr = [];
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length / 2; i++) {
        const sum = nums[startIdx] + nums[endIdx];
        arr.push(sum);
        startIdx += 1;
        endIdx -= 1;
    }
    console.log(Math.max(...arr));
 };
 

//  minPairSum([3, 5, 2, 3]);
minPairSum([3, 5, 4, 2, 4, 6]);