const fs = require('fs');
const input = fs.readFileSync('1946.txt').toString().trim().split("\n");

const solution = () => {
    const testCase = +input.shift();
    const result = [];

    for(let i = 0; i < testCase; i++) {
        const N = +input.shift();
        const arr = input.splice(0, N).map(v => v.split(" ").map(v => +v)).sort((a, b) => a[0] - b[0]);
        
        let count = 1;
        let top = arr[0][1];

        for(let i = 1; i < arr.length; i++) {
            if(top === 1) break;
            if(arr[i][1] < top) {
                top = arr[i][1];
                count += 1;
            }
        }
        result.push(count);
    }
    console.log(result.join("\n"));
    
}

solution();