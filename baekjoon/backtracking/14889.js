const fs = require('fs');
const input = fs.readFileSync('14889.txt').toString().trim().split('\n');

const solution = () => {
    const N = +input[0];
    const arr = input.slice(1).map((str) => str.split(" ").map(Number));
    const check = new Array(N).fill(false);
    let min = Number.MAX_SAFE_INTEGER;

    const dfs = (left, right) => {
        if(left === N / 2) {
            console.log(check);
            const sTeam = [];
            const lTeam = [];
            let sSum = (lSum = 0);

            for (let i = 0; i < N; i++) {
                if (check[i]) sTeam.push(i);
                else lTeam.push(i);
            }

            for (let i = 0; i < N / 2; i++) {
                for (let j = i + 1; j < N / 2; j++) {
                  sSum = sSum + arr[sTeam[i]][sTeam[j]] + arr[sTeam[j]][sTeam[i]];
                  lSum = lSum + arr[lTeam[i]][lTeam[j]] + arr[lTeam[j]][lTeam[i]];
                }
            }
            min = Math.min(min, Math.abs(sSum - lSum));
            return;
        }

        for (let i = right; i < N; i++) {
            check[i] = true;
            dfs(left + 1, i + 1);
            check[i] = false;
        }
    }

    dfs(0, 0);
    return min;
}

solution();