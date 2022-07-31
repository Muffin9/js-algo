const fs = require('fs');
const input = fs.readFileSync('1744.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = [...input].map(v => +v);
    const positiveArr = [];
    const negativeArr = [];
    let answer = 0;

    arr.forEach((v) => {
        if(v > 0) positiveArr.push(v);
        else negativeArr.push(v);
    });

    positiveArr.sort((a, b) => b - a);
    negativeArr.sort((a, b) => a - b);
    
    for(let i = 1; i < positiveArr.length; i += 2) {
        if(positiveArr[i] === 1 || positiveArr[i - 1] === 1) {
            answer += (positiveArr[i-1] + positiveArr[i]);
        } else {
            answer += (positiveArr[i-1] * positiveArr[i]);
        }
    }

    if (positiveArr.length % 2) answer += positiveArr.pop();

    for(let i = 1; i < negativeArr.length; i += 2) {
        answer += (negativeArr[i-1] * negativeArr[i]);
    }

    if (negativeArr.length % 2) answer += negativeArr.pop();

    console.log(answer);
}

solution();