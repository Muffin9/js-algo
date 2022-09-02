const fs = require('fs');
const input = fs.readFileSync("9012.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();
    for(let i = 0; i < N; i++) {
        const bracket = input[i].split("");
        const stack = [];
        let flag = true;
        for(let j = 0; j < bracket.length; j++) {
            if(stack.length === 0 && bracket[j] === ')') {
                flag = false;
                break;
            }
            else if(stack.length !== 0 && bracket[j] === ')') {
                stack.pop();
            } else {
                stack.push('(');
            }
        }
        if(flag) {
            stack.length === 0 ? console.log("YES") : console.log("NO");
        } else {
            console.log("NO");
        }
    }
}

solution();