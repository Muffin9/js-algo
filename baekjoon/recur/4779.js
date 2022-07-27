const fs = require('fs');
const input = fs.readFileSync('4779.txt').toString().trim().split('\n');

const solution = () => {
    const inputArr = input;

    const recur = (arr, start, len) => {
        const temp = Math.floor(len / 3);
        if(temp === 0) return;

        for(let i = start + temp ; i < start + temp * 2; i++) {
            arr[i] = ' ';
        }
        

        recur(arr, start, temp);
        recur(arr, temp * 2 + start, temp);
    }

    for(let i = 0; i < inputArr.length; i++) {
        const N = +inputArr[i];
        const arr = new Array(Math.pow(3, N)).fill('-');
        recur(arr, 0, Math.pow(3, N));
        console.log(arr.join(""));
    }
}

solution();