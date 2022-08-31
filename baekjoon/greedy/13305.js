const fs = require('fs');
const input = fs.readFileSync('13305.txt').toString().trim().split("\n");

const solution= () => {
    const N = +input.shift();
    const roadPrice = input.shift().split(" ").map(v => BigInt(v));
    const stations = input.shift().split(" ").map(v => BigInt(v));

    let curentStation = stations[0];
    let cost = 0n;

    for(let i = 0; i < N - 1; i++) {
        cost += curentStation * roadPrice[i];
        if(curentStation > stations[i + 1]) curentStation = stations[i + 1];
    }
    console.log(cost.toString());
}

solution();