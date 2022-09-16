/**
 * @param {number} n
 * @return {number}
 */
// var minOperations = function(n) {
//     const arr = new Array(n);
//     for(let i = 0; i < n; i++) {
//         arr[i]  = (2 * i) + 1;
//     }

//     let count = 0;
    
//     while(true) {
//         const min = Math.min(...arr);
//         const max = Math.max(...arr);
//         const minIdx = arr.indexOf(min);
//         const maxIdx = arr.indexOf(max);

//         if(min === max) {
//             console.log(count);
//             return;
//         }
//         arr[minIdx] += 1;
//         arr[maxIdx] -= 1;
//         count += 1;
//     }
// };

var minOperations = function(n) {
    if(n === 1) return 0;
    const arr = new Array(n);
    for(let i = 0; i < n; i++) {
        arr[i]  = (2 * i) + 1;
    }
    let count = 0;
    let idx = 0;
    while(idx < n) {
        if(arr[idx] < n) {
            count += n - arr[idx];
            idx += 1;
        }
        else {
            console.log(count);
            return;
        }
    }
}

minOperations(4);
