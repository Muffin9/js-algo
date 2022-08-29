const fs = require('fs');
const input = fs.readFileSync('1789.txt').toString().trim();

const solution = () => {
    const S = +input;
    let sum = 0;
    let i = 0;
    while(true) {
        if(sum > S) {
            console.log(i - 1);
            return;
        }
        i += 1;
        sum += i;
    }
}

solution();