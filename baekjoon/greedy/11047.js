const fs = require('fs');
const input = fs.readFileSync('11047.txt').toString().trim().split("\n");

const solution = () => {
    const [N, K]  = input.shift().split(" ").map(v => +v);
    const coins = [...input].map(v => +v);

    let money = K;
    coins.sort((a, b) => b - a);
    let answer = 0;

    for(let i = 0; i < coins.length; i++) {
        const share = Math.floor(money / coins[i])
        if(share > 0) {
            answer += share;
            money -= coins[i] * share;
        }
    }

    console.log(answer);
}

solution();