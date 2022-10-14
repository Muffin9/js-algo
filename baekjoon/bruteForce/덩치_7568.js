const fs = require('fs');
const input = fs.readFileSync('7568.txt').toString().trim().split("\n");

const solution = () => {
    const n = +input.shift();
    const result = [];
    for(let i = 0; i < n; i++) {
        let rank = 1;
        const [w, h] = input[i].split(" ").map(v => +v);
        for(let j = 0; j < n; j++) {
            const [w2, h2] = input[j].split(" ").map(v => +v);
            if(i === j) continue;
            if(w < w2 && h < h2) rank += 1;
        }
        result.push(rank);
    }
    console.log(result.join(" "));
}

solution();