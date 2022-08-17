const fs = require('fs');
const input = fs.readFileSync('바이러스_2606.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const edgeCount = +input.shift();
    const graph = Array.from(new Array(N + 1), () => []);
    const visited = new Array(N + 1).fill(false);

    for(let i = 0; i < edgeCount; i++) {
        const [n1, n2] = input.shift().split(" ").map(v => +v);
        graph[n1].push(n2);
        graph[n2].push(n1);
    }


    let virus = 0;
    const dfs = (num) => {
        for(let i = 0; i < graph[num].length; i++) {
            if(!visited[graph[num][i]]) {
                visited[graph[num][i]] = true;
                virus += 1;
                dfs(graph[num][i]);
            }
        }
    }

    dfs(1);
    console.log(virus - 1);


}

solution();