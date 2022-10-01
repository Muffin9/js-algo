const coins = require('fs').readFileSync('1439.txt').toString().trim();

const solution = () => {
    let currentcoin = coins[0];
    let count = 0;
    for(let i = 1; i < coins.length; i++) {
        if(coins[i] !== currentcoin) {
            count += 1;
            currentcoin = coins[i];
        }
    }
    console.log(Math.ceil(count / 2));
}

solution();
