const [N, arr] = require('fs').readFileSync('20115.txt').toString().trim().split("\n");

const solution = () => {
    const drinks = arr.split(" ").map(v => +v).sort((a, b) => a - b);
    let sum = drinks.pop();
    while(drinks.length !== 0) {
        const value = drinks.shift() / 2;
        sum += value;
    }
    console.log(sum);
}

solution();