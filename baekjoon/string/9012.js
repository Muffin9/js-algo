const fs = require('fs');
const input = fs.readFileSync("9012.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();

    for(let i = 0; i < N; i++) {
        const stack = input.shift().split("");
        let brackCount = 0;
        let flag = true;

        while(stack.length !== 0) {
            const bracket = stack.pop();
            if(bracket === "(") {
                brackCount -= 1;
            }
            else if(bracket === ")") {
                brackCount += 1;
            }
            if(brackCount < 0) {
                console.log("NO")
                flag = false;
                break;
            }
        }

        if(flag) {
            if(brackCount === 0){
                console.log("YES");
            } else {
                console.log("NO");
            }
        }
    }
}

solution();