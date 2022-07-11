const fs = require('fs');
const input = fs.readFileSync("5397.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();

    for(let i = 0; i < N; i++) {
        const testCase = input[i];
        const leftStack = [];
        const rightStack = [];
        for(let j = 0; j < testCase.length; j++) {
            switch(testCase[j]) {
                case "<":
                    if(leftStack.length) {
                        rightStack.push(leftStack.pop());
                    }
                    break;
                case ">":
                    if(rightStack.length) {
                        leftStack.push(rightStack.pop());
                    }
                    break;
                case "-":
                    if(leftStack.length) {
                        leftStack.pop();
                        break;
                    }
                    break;
                default:
                    leftStack.push(testCase[j]);
            }
        }
        const result = [...leftStack, ...rightStack.reverse()];
        console.log(result.join(""));
    }

}

solution();