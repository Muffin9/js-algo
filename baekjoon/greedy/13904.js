const fs = require('fs');
const input = fs.readFileSync('13904.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const homeworks = new Array(N);
    const scores = new Array(1001).fill(0);
    for(let i = 0; i < N; i++) {
        homeworks[i] = input[i].split(" ").map(v => +v);
    }

    homeworks.sort((a, b) => b[1] - a[1]);

    for(let i = 0; i < N; i++) {
        for(let j = homeworks[i][0]; j > 0; j--) {
            if(scores[j] === 0) {
                scores[j] = homeworks[i][1];
                break;
            }
        }
    }
    
    let maxSum = 0;
    for(let i = 0; i < scores.length; i++) {
        maxSum += scores[i];
    }
    console.log(maxSum);
}

solution();