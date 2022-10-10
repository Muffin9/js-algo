/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        const str1 = nums[i];
        const len1 = str1.length;
        for(let j = 0; j < nums.length; j++) {
            if(i === j) continue;
            let str2 = nums[j];
            const len2 = str2.length;

            if(len1 + len2 === target.length) {
                const mixStr = str1 + str2;
                if(mixStr === target) count += 1;
            }
        }
    }
    console.log(count);
};


// var numOfPairs = function(nums, target) {
//     let map = {}
//     let count = 0;
  
//     for(const num of nums){
//         if(map[num]) map[num]++
//         else map[num] = 1
//     }

//     for(let num of nums){
//         const str = target.substring(num.length);
//         map[num]--
//         if(target.startsWith(num) && map[str]) count += map[str]
//         map[num]++
//     }
//     return count 
// };

numOfPairs(["777","7","77","77"], "7777");
// numOfPairs(["123","4","12","34"], "1234");
// numOfPairs(["74","1","67","1","74"], "174")