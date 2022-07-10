const fs = require('fs');
const input = fs.readFileSync("1935.txt").toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const str = input.shift();
    const nums = new Array(N);
    const stack = [];
    let answer = 0;
    for(let i = 0; i < N; i++) {
        nums[i]  = +input.shift();
    }

    for(let i = 0; i < str.length; i++) {
        if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            stack.push(nums[str[i].charCodeAt() - 65]);
        } else {
            const num1 = stack.pop();
            const num2 = stack.pop();
            switch(str[i]) {
                case '*':
                    stack.push(num2 * num1);
                    break;
                case '+':
                    stack.push(num2 + num1);
                    break;
                case '/':
                    stack.push(num2 / num1);
                    break;
                case '-':
                    stack.push(num2 - num1);
                    break;
            }
        }
    }
    console.log(Number(stack.join("")).toFixed(2));
}

solution();