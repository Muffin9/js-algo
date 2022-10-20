const fs = require('fs');
const [values, ...input] = fs.readFileSync('11724.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = values.split(" ").map(v => +v);
    const map = Array.from(new Array(N + 1), () => []);
    const visited = new Array(N + 1).fill(false);
    let answer = 0;

    for(let i = 0; i < input.length; i++) {
        const [v1, v2] = input[i].split(" ").map(v => +v);
        map[v1].push(v2);
        map[v2].push(v1);
    }   
    
    const bfs = (node) => {
        const queue = [node];

        while(queue.length) {
            const currentNode = queue.shift();
            if(!map[currentNode]) break;
            for(let i = 0; i < map[currentNode].length; i++) {
                const nextNode = map[currentNode][i];
                if(!visited[nextNode]) {
                    visited[nextNode] = true;
                    queue.push(nextNode);
                }
            }
        }
    }

    for(let i = 1; i <= N; i++) {
        if(!visited[i]) {
            answer += 1;
            bfs(i);
        }
    }
    console.log(answer);
}

solution();