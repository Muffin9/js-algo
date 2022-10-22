const [values, input] = require('fs').readFileSync('15656.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = values.split(" ").map(v => +v);

    const nums = input.split(" ").sort((a, b) => a - b).map(v => +v);
    let tmp = [];
    const answer = [];
    const recur = (idx) => {
        if(idx === M) {
            answer.push(tmp.join(" "))
            return;
        }

        for(let i = 0; i < N; i++) {
            tmp.push(nums[i]);
            recur(idx + 1);
            tmp.pop();
        }
    }

    recur(0);
    console.log(answer.join("\n"));
}

solution();