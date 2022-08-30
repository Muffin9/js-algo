const fs = require('fs');
const input = fs.readFileSync('14916.txt').toString().trim();

const solution = () => {
    let N = +input;
    let count = 0;

    while(N > 0) {
        if(Math.floor(N % 5) === 0) {
            count += N / 5;
            break;
        } else {
            count += 1;
            N -= 2;
        }
    }
    if(N < 0) console.log(-1);
    else console.log(count);
}

solution();