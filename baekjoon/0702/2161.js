const fs = require('fs');
const input = fs.readFileSync("2161.txt").toString();

const solution = () => {
    const N = +input;
    const arr = [];
    const resultArr = [];
    for(let i = 0; i < N; i++) {
        arr[i] = i + 1;
    }
    
    
    while(true) {
        const topValue = arr.shift();
        const nextTopValue = arr.shift();
        if(!nextTopValue) {
            resultArr.push(topValue);
            break;
        }
        resultArr.push(topValue);
        arr.push(nextTopValue);
        
    }
    console.log(resultArr.join(" "));
}

solution();