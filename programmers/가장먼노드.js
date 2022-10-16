function solution(n, edge) {
    const graph = Array.from(new Array(n + 1), () => []); // 통과되는 로직
    const pathValue = new Array(n + 1).fill(0);
    edge.forEach(v => {
        graph[v[0]].push(v[1]);
        graph[v[1]].push(v[0]);
    });
    
    const bfs = (node) => {
        const queue = [node];

        while (queue.length !== 0) {
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

    pathValue[1] = 1;
    bfs(1);
    const maxPathValue = Math.max(...pathValue);
    const count = pathValue.filter((edgeCount) => edgeCount === maxPathValue).length;
    console.log(pathValue);
    return count;
}

solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);