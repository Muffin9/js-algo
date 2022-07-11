const fs = require('fs');
const input = fs.readFileSync("1966.txt").toString().split("\n");

const solution = () => {
    const testCase = +input.shift();
    for(let i = 0; i < testCase; i++) {
        const [N, M] = input.shift().split(" ").map(v => +v);
        const printQueue = input.shift().split(" ").map((value, idx) => {
            const obj = {};
            obj.value = +value;
            obj.idx = idx;
            return obj;
        });

        let orderNum = 0;

        while(true) {
            const max = Math.max(...printQueue.map(v => v.value));
            const front = printQueue.shift();

            if(front.value === max) {
                orderNum += 1;
                if(front.idx === M) {
                    console.log(orderNum);
                    break;
                }
            } else {
                printQueue.push(front);
            }
        }
    }
}

solution();