const fs = require('fs');
const [input, ...arr] = fs.readFileSync('11660.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.split(" ").map(v => +v);
    const map = new Array(N);

    for(let i = 0; i < N; i++) {
        map[i] = arr[i].split(" ").map(v => +v);
    }
    
    const sumArr = new Array(N).fill(0);
    for(let i = 0; i < map.length; i++) {
        sumArr[i + 1] = sumArr[i] + map[i];
    }

    console.log(sumArr);
}

solution();