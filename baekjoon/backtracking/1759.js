const fs = require('fs');
const input = fs.readFileSync('1759.txt').toString().trim().split("\n");

const solution = () => {
    const [L, C] = input.shift().split(" ").map(v => +v);
    const alpha = input.shift().split(" ");
    const visited = new Array(C).fill(false);
    const arr = new Array(L);
    const result = [];

    const recur = (idx, depth) => {
        if(depth === L) {
            let moCount = 0;
            let jaCount = 0;
            // arr 의 모음 자음 개수 카운팅
            for(let i = 0; i < L; i++) {
                if('aeiou'.includes(arr[i])) moCount += 1;
                else jaCount += 1;
            }

            if(moCount >= 1 && jaCount >= 2) {
                result.push(arr.join(""));
            }
            return;
            
        }

        for(let i = idx; i < C; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            arr[depth] = alpha[i];
            recur(i + 1, depth + 1);
            visited[i] = false;
        }
    }

    recur(0, 0);

    const answer = [];
    for(let i = 0; i < result.length; i++) {
        answer.push(result[i].split("").sort().join(""));
    }
    console.log(answer.sort().join("\n"));
}

solution();

