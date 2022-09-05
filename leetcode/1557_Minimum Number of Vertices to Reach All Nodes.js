/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    // 2차원배열로 요소간 연결.
    // BFS로 순회하면서 visited 배열에 방문한 요소들 true로 체크.
    const graph = new Array(n).fill([]);
    const visited = new Array(n).fill(false);

    for(let i = 0; i < edges.length; i++) {
        graph[edges[i][0]] = [...graph[edges[i][0]], edges[i][1]];
    }

    const bfs = (num) => {
        const queue = [num];
        
        while(queue.length !== 0) {
            const frontValue = queue.shift();
            for(let i = 0; i < graph[frontValue].length; i++) {
                const next = graph[frontValue][i];
                if(!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
    }

    for(let i = 0; i < n; i++) {
        if(visited[i]) continue;
        bfs(i);
    }
    
    const resultNode = [];
    for(let i = 0; i < visited.length; i++) {
        if(!visited[i]) resultNode.push(i);
    }

    return resultNode;
};

findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]]);
findSmallestSetOfVertices(5, [[0,1],[2,1],[3,1],[1,4],[2,4]]);
