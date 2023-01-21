const input = require('fs').readFileSync('1389.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input[0].split(" ").map(Number);
    const map = Array.from(new Array(N + 1), () => []);
    const result = new Array(N);

    for(let i = 0; i < M; i++) {
        const [v1, v2] = input[i + 1].split(" ").map(Number);
        map[v1].push(v2);
        map[v2].push(v1);
    }

    const BFS = (userNum, target) => {
        const queue = [[userNum, 0]];
        const visited = Array.from({ length: N + 1 }, () => false);
        while (queue.length) {
            let [cur, count] = queue.shift();
            let friend = map[cur];
            if (visited[cur]) continue;
            visited[cur] = true;
            if (cur === target) return count;

            for (let i = 0; i < friend.length; i++) {
                if (visited[friend[i]]) continue;
                queue.push([friend[i], count + 1]);
            }
        }
    }

    for(let i = 0; i < N; i++) {
        let count = 0;
        for (let j = 1; j <= N; j++) {
            count += BFS(i + 1, j);
        }
        result[i] = count;
    }

    let minValue = Math.min(...result);
    console.log(result.indexOf(minValue) + 1); 
}

solution();