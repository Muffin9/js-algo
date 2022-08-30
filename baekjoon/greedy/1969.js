const fs = require('fs');
const input = fs.readFileSync('1969.txt').toString().trim().split('\n');

const solution = () => {
    const [N, M]  = input.shift().split(" ").map(v => +v);
    const DNA = new Array(N);
    for(let i = 0; i < N; i++) {
        DNA[i] = input.shift();
    }
    let hammingDistance = 0;
    let hammingStr = '';
    for(let i = 0; i < M; i++) {
        const map = new Map();
        map.set('A', 0);
        map.set('C', 0);
        map.set('G', 0);
        map.set('T', 0);
        for(let j = 0; j < N; j++) {
            const str = DNA[j][i];
            map.set(str, map.get(str) + 1);
        }
        // reduce로도 최대값을 쉽게 구할 수 있구나.
        const max = [...map.entries()].reduce((a, b) => {
            if(a[1] === b[1] ) return a[0] < b[0] ? a : b;
            return a[1] > b[1]? a : b
        });

        hammingStr += max[0];
        hammingDistance += N - max[1];
        
    }
    console.log(hammingStr, hammingDistance)
}

solution();