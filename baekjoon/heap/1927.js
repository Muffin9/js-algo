const fs = require('fs');
const input = fs.readFileSync('1927.txt').toString().split("\n");

const solution = () => {
    const N = +input.shift();
    const heap = [];
    const result = [];

    for(let i = 0; i < N; i++) {
        const value = +input.shift();
        if(value === 0) {
            if(heap.length) result.push(heap.pop());
            else result.push(0);
        } else {
            heap.push(value);
        }
    }
    console.log(result.join("\n"));
}

solution();