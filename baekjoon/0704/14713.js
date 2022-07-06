const fs = require('fs');
const input = fs.readFileSync("14713.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();
    const queue = Array.from(new Array(100), () => new Array());
    let result = false;
    for(let i = 0; i < N; i++) {
        const wordArr = input.shift().split(" ");
        queue[i] = wordArr;
    }
    const LArr = input.shift().split(" ");

    for(let i = 0; i < LArr.length; i++) {
        const word = LArr[i];
        for(let j = 0; j < N; j++) {
            if(word === queue[j][0]) {
                queue[j].shift();
                result = true;
            }
        }

        if(!result) {
            console.log("Impossible")
            return;
        } else {
            result = false;
        }
    }

    for(let i = 0; i < N; i++) {
        if(queue[i].length !== 0) {
            console.log("Impossible")
            return;
        }
    }

    console.log("Possible");
}

solution();