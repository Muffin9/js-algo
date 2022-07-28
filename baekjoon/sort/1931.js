const fs = require('fs');
const input = fs.readFileSync('1931.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = new Array(N);
    for(let i = 0; i < N; i++) {
        const[start, end] = input.shift().split(" ").map(v => +v);
        const obj = {};
        obj.start = start;
        obj.end = end;
        arr[i] = obj;
    }
    
    arr.sort((a, b) => {
        if(a.end === b.end) {
            return a.start - b.start
        }
        else return a.end - b.end
    });

    let endTime = arr[0].end;
    let count = 1;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].start >= endTime) {
            endTime = arr[i].end;
            count += 1;
        }
    }
    console.log(count);
}

solution();