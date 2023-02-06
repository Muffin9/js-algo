const [T, ...input] = require('fs').readFileSync('20437.txt').toString().trim().split("\n");

const solution = () => {

    let idx = 0;
    while(idx < T) {
        const W = input[idx];
        const K = +input[++idx];

        const map = new Map();
        const words = [];
    
        for(let i = 0; i < W.length;i++) {
            if(!map.has(W[i])) {
                map.set(W[i], [1, i]);
            } else {
                const arr = [...map.get(W[i]), i];
                arr[0] += 1;
                map.set(W[i], arr);
            }
        }

        map.forEach((v, k) => {
            if(v[0] >= K) {
                for(let i = v.length - 1; i >= K; i--) {
                    words.push(v[i] - v[i - K + 1] + 1);
                }
            }
        });
        

        if(words.length === 0) {
            console.log(-1);
        } else {
            words.sort((a,b) => a - b);
            console.log(words[0] + " " + words[words.length-1]);
        }
    }
}

solution();