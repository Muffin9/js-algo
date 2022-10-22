const [values, input] = require('fs').readFileSync('15663.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = values.split(" ").map(v => +v);
    const numsArr = input.split(" ").map(v => +v).sort((a, b) => a - b);
    const visited = new Array(N).fill(false);

    const result = [];
    const temp = [];
    const recur = (idx) => {
        if(idx === M) {
            result.push(temp.join(" "));
            return;
        }

        for(let i = 0; i < numsArr.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            temp.push(numsArr[i]);
            recur(idx + 1);
            visited[i] = false;
            temp.pop();
        }
    }

    recur(0);
    const set = new Set(result);
    for(const element of set) {
        console.log(element);
    }
}

solution();