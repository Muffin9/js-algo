// const fs = require('fs');
// const input = fs.readFileSync('15970.txt').toString().trim().split("\n");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  console.log(input);
  process.exit();
});


const solution = () => {
    const N = +input.shift();
    const boards = new Array(N);
    
    for(let i = 0; i < N; i++) {
        boards[i] = input[i].split(" ").map(v => +v);
    }

    boards.sort((a, b) => a[1] - b[1]);

    let maxSum = 0;
    for(let i = 0; i < N; i++) {
        let sum = 0;
        for(let j = 0; j < N; j++) {
            if(i === j || boards[i][1] !== boards[j][1]) continue;
            if(sum === 0) sum = Math.abs(boards[i][0] - boards[j][0]);
            else {
                sum = Math.min(sum, Math.abs(boards[i][0] - boards[j][0]))
            }
        }
        maxSum += sum;
    }
    console.log(maxSum);
}

solution();