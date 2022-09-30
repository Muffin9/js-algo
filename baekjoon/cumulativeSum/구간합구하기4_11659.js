const fs = require('fs');
const [input, nums, ...arr] = fs.readFileSync('11659.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M]  = input.split(" ").map(v => +v);
    const numArr = nums.split(" ").map(v => +v);
    const sumArr = new Array(numArr.length + 1).fill(0);
    const result = [];

    for(let i = 0; i < numArr.length; i++) {
        sumArr[i + 1] = sumArr[i] + numArr[i];
    }
    

    for(let i = 0; i < M; i++) {
        const [start, end] = arr[i].split(" ").map(v => +v);
        result.push(sumArr[end] - sumArr[start - 1]);
    }
    
    console.log(result);
}

solution();