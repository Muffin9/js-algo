const fs = require('fs');
const input = fs.readFileSync("1406.txt").toString().trim().split("\n");

const solution = () => {
    const initStr = input.shift();
    const M = +input.shift();
    const leftStack = [...initStr.split("")];
    const rightStack = [];

    for(let i = 0; i < M; i++) {
        // 여기서 const [command, s] = input.shift().split(" "); 해주면 시간초과 Why ?
        // shift(), pop() 연산은 원본 배열의 값을 가져오면서 원본 배열을 수정하기 때문
        switch(input[i][0]) {
            case 'B':
                if (leftStack.length !== 0) {
                    leftStack.pop();
                }
                break;
            case 'P':
                leftStack.push(input[i][2]);
                break;
            case 'L':
                if(leftStack.length !== 0) {
                    rightStack.push(leftStack.pop());
                }
                break;
            case 'D':
                if(rightStack.length !== 0) {
                    leftStack.push(rightStack.pop());
                }
                break;
        }
    }

    while (rightStack.length) {
        leftStack.push(rightStack.pop());
    }
    
    console.log(leftStack.join(""));
}

solution();