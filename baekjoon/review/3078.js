const fs = require('fs');
const input = fs.readFileSync("3078.txt").toString().split("\n");

const solution = () => {
    const [N, K] = input.shift().split(" ").map(v => +v);
    const students = [...input];
    const queue = Array.from(new Array(21), () => new Array());
    let result = 0;

    for(let i = 0; i < N; i++) {
        const studentNameLen = students[i].length;
        while(i - queue[studentNameLen][0] > K) {
            queue[studentNameLen].shift();
        }
        result += queue[studentNameLen].length;
        queue[studentNameLen].push(i);
    }
    console.log(result);
}

solution();