function solution(n, edge) {
    const graph = new Array(n + 1).fill([]);
    const pathValue = new Array(n + 1).fill(0);
    for(let i = 0; i <= n; i++) {
        const [v1, v2] = edge[i];
        graph[v1] = [...graph[v1], v2];
        graph[v2] = [...graph[v2], v1];
    }

    const bfs = (node) => {
        const queue = [node];

        while(queue.length !== 0) {
            const prevNode = queue.shift();

            for(let i = 0; i < graph[prevNode].length; i++) {
                const nextNode = graph[prevNode][i];
                if(!pathValue[nextNode]) {
                    pathValue[nextNode] = pathValue[prevNode] + 1;
                    queue.push(nextNode);
                }
            }
        }
    }

    // pathValue[1] = 1;
    bfs(1);

    const maxPathValue = Math.max(...pathValue);
    const count = pathValue.filter((edgeCount) => edgeCount === maxPathValue).length;
    console.log(count);
}

solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);