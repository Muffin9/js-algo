const fs = require('fs');
const input = fs.readFileSync("1316.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();
    let answer = 0;

    for(let i = 0; i < N; i++) {
        const arr = input.shift();
        let flag = true;
        for(let j = 0; j < arr.length; j++) {
            const standard = arr[j];
            for(let k = j + 1; k < arr.length; k++) {
                if(standard === arr[k]) {
                    if(arr[k-1] !== standard) {
                    flag = false;
                    break;
                    }
                }
            }
            if(!flag) break;
        }
        if(flag) answer += 1;
    }
    console.log(answer);
}

solution();