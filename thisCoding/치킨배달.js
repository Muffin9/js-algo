const input = require('fs').readFileSync('치킨배달.txt').toString().split("\n");

function solution() {
    const [N, M] = input.shift().split(" ").map(Number);
    const maps = input.map((el) => el.split(" ").map(Number));
    let minValue = Number.MAX_VALUE;

    const homeList = [];
    const chickenList = [];
    const selectedChicken = [];

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            if(maps[i][j] === 1) homeList.push([i, j]);
            else if(maps[i][j] === 2) chickenList.push([i, j]);
        }
    }

    const dfs = (idx, cnt) => {
        if(cnt === M) {
            let sum = 0;
            for(let i = 0; i < homeList.length; i++) {
                let minValue = Number.MAX_VALUE;
                for(let j = 0; j < selectedChicken.length; j++) {
                    const distance = Math.abs(homeList[i][0] - selectedChicken[j][0]) + Math.abs(homeList[i][1] - selectedChicken[j][1]);
                    minValue = Math.min(minValue, distance);
                }
                sum += minValue;
            }
            minValue = Math.min(minValue, sum);
            return;
        }

        for(let i = idx; i < chickenList.length; i++) {
            selectedChicken.push(chickenList[i]);
            dfs(i + 1, cnt + 1);
            selectedChicken.pop();
        }
    }

    dfs(0, 0);
    console.log(minValue);
}

solution();