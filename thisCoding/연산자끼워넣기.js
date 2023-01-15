const input = require('fs').readFileSync('연산자끼워넣기.txt').toString().split("\n");

function solution() {
    const N = input[0];
    const nums = input[1].split(" ").map(Number);
    const operNums = input[2].split(" ").map(Number);
    const result = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    const operObj = {
        0: (a, b) => a + b,
        1: (a, b) => a - b,
        2: (a, b) => a * b,
        3: (a, b) => ~~(a / b)
    }

    const dfs = (operIdxs) => {
        if(operIdxs.length === N - 1) {
            let sum = nums[0];
            for(let i = 0; i < operIdxs.length; i++) {
                sum = operObj[operIdxs[i]](sum, nums[i + 1]);
            }
            result[0] = Math.max(result[0], sum);
            result[1] = Math.min(result[1], sum);
            return;
        }

        for(let i = 0; i < 4; i++) {
            if(!operNums[i]) continue;
            operNums[i] -= 1;
            operIdxs.push(i);
            dfs(operIdxs);
            operNums[i] += 1;
            operIdxs.pop();
        }
    }

    dfs([]);
    console.log(result.join("\n"));
}

solution();