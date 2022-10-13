const [N, strs] = require('fs').readFileSync('20365.txt').toString().trim().split("\n");

const solution = () => {
    const arr = strs.split("");
    let blueCount = 0;
    let redCount = 0;

    if(arr[0] === "B") blueCount += 1;
    else redCount += 1;
    for(let i = 1; i < N; i++) {
        if(arr[i] === "B" && arr[i - 1] === "R") blueCount += 1;
        if(arr[i] === "R" && arr[i - 1] === "B") redCount += 1;
    }

    console.log(Math.min(blueCount, redCount) + 1);
}

solution();