const fs = require('fs');
const input = fs.readFileSync('15686.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const arr = input.splice(0, N).map(v => v.split(" ").map(v => +v));
    const homeList = [];
    const chickenList = [];
    const selected = []
    let result = Number.MAX_VALUE;

    for(let i=0; i< N; i++){
        for(let j = 0; j< N; j++){
            if(arr[i][j] === 1){
                homeList.push([i + 1, j + 1]);
            } else if(arr[i][j] === 2){
                chickenList.push([i + 1,j + 1]);
            }
        }
    }

    const recur = (idx, depth) => {
        if(depth === M) {
            let sum = 0;
            for(let i = 0; i < homeList.length; i++){
                let minValue = Number.MAX_VALUE;
                for(let j = 0; j < selected.length; j++){
                    let calculateMin = Math.abs(selected[j][0] - homeList[i][0]) + Math.abs(selected[j][1] - homeList[i][1]);
                    minValue = Math.min(minValue, calculateMin);
                }
                sum += minValue;
            }
            result = Math.min(result, sum);
            return;
        }

        for (let i = idx; i < chickenList.length; i++) {
            selected.push(chickenList[i]);
            recur(i + 1, depth + 1);
            selected.pop();
        }
    }
    
    recur(0, 0);
    console.log(result);
}

solution();