const [N, ...arr] = require('fs').readFileSync('1010.txt').toString().trim().split("\n");

const solution = () => {
    const testCase = +N;

    const factorial = (n) => {
        let num = 1;
        for (let i = 1; i < n + 1; i++) num *= i;
        return num;
    }

    for(let i = 0; i < testCase; i++) {
        const [west, east] = arr[i].split(" ").map(v => +v);
        let bridge = 1;
        bridge = Math.round(factorial(east) / (factorial(west) * factorial(east - west)));
        console.log(bridge);
    }
}

solution();