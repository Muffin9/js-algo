const [n, k, ...cards] = require('fs').readFileSync('5568.txt').toString().trim().split("\n");

const solution = () => {
    const visited = new Array(n).fill(false);
    const set = new Set();

    const recur = (num, idx) => {
        if(idx === +k) {
            set.add(num);
            return;
        }

        for(let i = 0; i < n; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            recur(num + cards[i], idx + 1);
            visited[i] = false;
        }
    }

    recur('', 0);
    console.log(set.size);
}

solution();