/**
 * @param {number[]} arr
 * @return {number}
 */
// var countTriplets = function(arr) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             for(let k = j; k < arr.length; k++) {
//                 let xor1 = 0, xor2 = 0;
//                 for (let x = i; x < j; x++) {
//                     xor1 ^= arr[x];
//                 }

//                 for (let x = j; x <= k; x++) {
//                     xor2 ^= arr[x];
//                 }
//                 if (xor1 === xor2) {
//                     count++;
//                 }
//             }
//         }
//     }
//     console.log(count);
// };

const countTriplets = function (arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      let xor1 = arr[i]
      for (let j = i + 1; j < arr.length; j++) {
        if (i <= j - 1) {
            xor1 ^= arr[j]
        }
        let xor2 = arr[j]
        for (let k = j; k < arr.length; k++) {
            xor2 ^= arr[k]
          if (xor1 === xor2) {
            count += 1
          }
        }
      }
    }
    return count
  }

countTriplets([2,3,1,6,7]);
// countTriplets([1,1,1,1,1]);