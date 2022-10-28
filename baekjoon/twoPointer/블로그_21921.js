const [input, arr] = require('fs').readFileSync('21921.txt').toString().trim().split("\n");

const solution = () => {
    const [N, X] = input.split(" ").map(v => +v);
    const dates = arr.split(" ").map(v => +v);
    
    let maxNum = 0;
    let count = 0;
    let sum = 0;
    let end = 0;

    for(let i = 0; i < N; i++) {
        // const newArr = dates.slice(i, X + i);
        // const sum = newArr.reduce((prev, cur) => cur += prev, 0);
        if(end === N) break;
        while((end - i < X) && end < N){
            sum += dates[end];
            end += 1;
        }
        if (maxNum < sum) {
            count = 1;
            maxNum = sum;
        } else if (maxNum === sum) {
            count += 1;
        }

        sum -= dates[i];
    }

    if (maxNum === 0) {
        console.log("SAD");
        return;
    }

    console.log(maxNum);
    console.log(count);
}

solution();