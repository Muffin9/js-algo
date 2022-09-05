/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    const len = arr.length;
    const max = new Array(len).fill(0);
    let count = 0;
    max[0] = arr[0];
    for(let i = 1; i < len; i++) {
        if(arr[i] > max[i - 1]) {
            max[i] = arr[i];
        } else {
            max[i] = max[i - 1];
        }
    }
    for(let i = 0; i < len; i++) {
        if(max[i] === i) {
            count += 1;
        }
    }
    console.log(count);
};

// maxChunksToSorted([4, 3, 2, 1, 0]);
maxChunksToSorted([1, 0 ,2, 3, 4]);