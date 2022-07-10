const fs = require('fs');
const input = fs.readFileSync("13335.txt").toString().split("\n");

const solution = () => {
    const [N, w, L] = input.shift().split(" ").map(v => +v);
    const waitingTrucks = input.shift().split(" ").map((truck) => {
        const obj = {};
        obj.weight = +truck;
        obj.time = w;
        return obj;
    });
    
    const onBridgeTrucks = [];
    let answer = 0;

    while(waitingTrucks.length !== 0 || onBridgeTrucks.length !== 0) {
        onBridgeTrucks.forEach((truck, idx) => {
            if(truck.time === 0) onBridgeTrucks.splice(idx, 1);
        });

        const sumWeights = onBridgeTrucks.reduce((prev, cur) => prev += cur.weight, 0);

        if(waitingTrucks.length) {
            if(sumWeights + waitingTrucks[0].weight <= L) {
                onBridgeTrucks.push(waitingTrucks.shift());
            }
        }

        onBridgeTrucks.forEach((truck) => {
            truck.time -= 1;
        });

        answer += 1;
    }
    console.log(answer);
}

solution();