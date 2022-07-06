const fs = require('fs');
const input = fs.readFileSync("13335.txt").toString().split("\n");

const solution =() => {
    const [n, w, L] = input.shift().split(" ").map(v => +v);
    const waitingTrucks = [...input.shift().split(" ").map((truckWeight) => {
        const obj = {};
        obj.weight = +truckWeight;
        obj.time = w;
        return obj;
    })];

    const onBridgeTrucks = [];
    let resultTime = 0;

    while(waitingTrucks.length !== 0 || onBridgeTrucks.length !== 0) {
        // 다리위에 놓인 트럭들 체킹해서 time이 0이면 없애기.
        for(let i = 0; i < onBridgeTrucks.length; i++) {
            if(onBridgeTrucks[i].time === 0) {
                onBridgeTrucks.splice(i, 1);
            }
        }

        const sumWeights = onBridgeTrucks.reduce((prev, cur) => prev += cur.weight, 0);

        if(waitingTrucks.length !== 0) {
            if(sumWeights + waitingTrucks[0].weight <= L) {
                onBridgeTrucks.push(waitingTrucks.shift());
            }
        }
        
        // 다리위에 놓인 트럭들 시간 1 차감.
        for(let i = 0; i < onBridgeTrucks.length; i++) {
            onBridgeTrucks[i].time -= 1;
        }
        resultTime += 1;
    }

    console.log(resultTime);
}

solution();