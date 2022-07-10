const fs = require('fs');
const input = fs.readFileSync('3986.txt').toString().split("\n");

const solution = () => {
    const N = +input.shift();
    let answer = 0;
    for(let i = 0; i < N; i++) {
        const str = input.shift();
        const stack = [];

        for(let j = 0; j < str.length; j++) {
            if(str[j] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                stack.push(str[j]);
            }
        }
        if(stack.length === 0) answer += 1;
    }
    console.log(answer);
}

solution();