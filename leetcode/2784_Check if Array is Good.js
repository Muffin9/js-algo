/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  nums.sort((a, b) => a - b);
  const maxValue = Math.max(...nums);
  if (nums.length + 1 !== maxValue) return false;
  let idx = 1;
  for (let i = 0; i <= maxValue - 2; i++) {
    if (nums[i] === idx) idx += 1;
    else return false;
  }

  if (nums[nums.length - 1] !== maxValue || nums[nums.length - 2] !== maxValue)
    return false;

  return true;
};

// isGood([2, 1, 3]);
// isGood([1, 3, 3, 2]);
