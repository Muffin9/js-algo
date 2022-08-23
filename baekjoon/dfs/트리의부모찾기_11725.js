const fs = require('fs');
const input = fs.readFileSync('트리의부모찾기_11725.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const graph = Array.from(new Array(N + 1), () => []);
    const tree = [];
    const visited = new Array(N + 1);

    for(let i = 0; i < input.length; i++) {
        const [n1, n2] = input[i].split(" ").map(v => +v);
        graph[n1].push(n2);
        graph[n2].push(n1);
    }

    const bfs = (num) => {
        visited[num] = true;
        const queue = [num];

        while(queue.length !== 0) {
            const frontValue = queue.shift();
                for (let i = 0; i < graph[frontValue].length; i++) {
                    const next = graph[frontValue][i];
                    if(!visited[next]) {
                        visited[next] = true;
                        tree[next] = frontValue;
                        queue.push(next);
                    }
            }
        }
    }

    bfs(1);
    let result = "";
    tree.forEach((ans) => (result += ans + "\n"));
    console.log(result);

}


solution();