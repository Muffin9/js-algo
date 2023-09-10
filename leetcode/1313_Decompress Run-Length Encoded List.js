/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];
  const scope = 2;
  let start = 0;
  while (start < nums.length) {
    let temp = new Array(nums[start]).fill(nums[start + 1]);
    start += scope;
    result.push(...temp);
  }

  return result;
};

decompressRLElist([1, 2, 3, 4]);
