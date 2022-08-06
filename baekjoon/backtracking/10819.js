const fs = require('fs');
const input = fs.readFileSync('10819.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.shift().split(" ").map(v => +v);
    const visited = Array(N).fill(false);
    const output = [];
    const stack = [];

    const recur = (count) => {
        if (count === N) {
          stack.push(output.join(" "));
          return;
        }

    for (let i = 0; i < N; i++) {
        if (visited[i]) continue;
            visited[i] = true;
            output.push(arr[i]);
            recur(count + 1);
            output.pop();
            visited[i] = false;
        }
    }

    recur(0);
    let result = 0;
    for(let i = 0; i < stack.length; i++) {
        let sum = 0;
        const perArr = stack[i].split(" ");
        for(let j = 0; j < perArr.length - 1; j++) {
            sum += Math.abs(perArr[j] - perArr[j + 1]);
        }
        result = Math.max(result, sum);
    }
    console.log(result);
}

solution();