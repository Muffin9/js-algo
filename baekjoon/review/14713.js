const fs = require('fs');
const input = fs.readFileSync("14713.txt").toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const queue = Array.from(new Array(N), () => input.shift().split(" "));
    const L = input.shift().split(" ");
    let checkFlag = false;

    for(let i = 0; i < L.length; i++) {
        const frontStr = L[i];
        checkFlag = false;
        for(let j = 0; j < queue.length; j++) {
            if(frontStr === queue[j][0]) {
                queue[j].shift();
                checkFlag = true;
            }
        }
        if(!checkFlag) {
            console.log("Impossible");
            return;
        }
    }

    for(let i = 0; i < N; i++) {
        if(queue[i].length !== 0) {
            console.log("Impossible")
            return;
        }
    }

    if(checkFlag) console.log("Possible");
}

solution();