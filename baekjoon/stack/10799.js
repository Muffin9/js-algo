const fs = require('fs');
const input = fs.readFileSync("10799.txt").toString().trim();

const solution = () => {
    const bracketArr = input.split("");
    let result = 0;
    const stack = [];
    for(let i = 0; i < bracketArr.length; i++) {
        if(bracketArr[i] === "(") {
            stack.push(bracketArr[i]);
        } else {
            stack.pop();
            if(bracketArr[i - 1] === "(") {
                result += stack.length;
            } else {
                result += 1;
            }
        }
    }
    console.log(result);
}

solution();