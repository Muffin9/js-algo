const fs = require('fs');
const input = fs.readFileSync("1455.txt").toString().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const coins = new Array(N);
    let answer = 0;

    for(let i = 0; i < N; i++) {
        coins[i]  = input.shift().split("").map(v => +v);
    }


    const reverse = (x, y) => {
        for (let i = 0; i <= x; i++)
        {
            for (let j = 0; j <= y; j++)
            {
                coins[i][j] = 1 - coins[i][j];
            }
        }
    }

    for(let i = N - 1; i >= 0; i--) {
        for(let j = M - 1; j >= 0; j--) {
            if(coins[i][j] === 1) {
                answer += 1;
                reverse(i, j);
            }
        }
    }

    console.log(answer);
}

solution();