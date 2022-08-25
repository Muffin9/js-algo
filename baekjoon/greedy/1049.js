const fs = require('fs');
const input = fs.readFileSync('1049.txt').toString().trim().split("\n");

const solution = () => {
    let [N, M] = input.shift().split(" ").map(v => +v);
    const sets = new Array(M);
    const individually = new Array(M);

    for(let i = 0; i < M; i++) {
        const [value1, value2] = input.shift().split(" ").map(v => +v);
        sets[i] = value1;
        individually[i] = value2;
    }

    const arr = [Math.min(...sets), Math.min(...individually)];

    let count = 0;
    const share = Math.floor(N / 6);
    count += arr[0] < arr[1] * 6 ? arr[0] * share : arr[1] * 6 * share;
    N = N - (6 * share);
    count += N * arr[1] < arr[0] ? N * arr[1] : arr[0];
    console.log(count);
}

solution();