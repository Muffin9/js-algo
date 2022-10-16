/**
 * @param {number[][]} isConnected
 * @return {number}
 */

// 우선 주어진 2차원배열 안에 있는 정점을 연결하는 그래프를 만들자.
// visited 배열을 선언하여 dfs로 탐색.
// 처음에 탐색 시 !vistied[node] 일 때 provinces + 1

var findCircleNum = function(isConnected) {
    const len = isConnected.length;
    const graph = Array.from({length: len + 1}, () => []);
    const visited = new Array(len + 1).fill(false);
    let provinces = 0;
    
    // 그래프 연결 하기.
    isConnected.forEach((edge, index) => {
        for(let i = 0; i < edge.length; i++) {
            if(i === index) continue; // 자기 자신 정점을 (셀프) 의미하므로 pass.
            if(edge[i]) graph[index + 1].push(i + 1);
        }
    });

    // dfs로 탐색하기.
    const dfs = (node) => {
        // 탐색한 정점은 탐색했으니 true로.
        visited[node] = true;

        // 연결된 정점들을 다시 깊이 우선 탐색.
        for(let i = 0; i < graph[node].length; i++) {
            if(!visited[graph[node][i]]) {
                // 연결되어있는 정점이 방문하지 않은 상태라면 ? 다시 dfs 호출
                dfs(graph[node][i]);
            }
        }
    }

    for(let i = 1; i <= len; i++) {
        if(!visited[i]) {
            provinces += 1;
            dfs(i);
        }
    }
    console.log(provinces);
};

// 주어진 Input 값들의 정점과 간선을 그래프로 표현하는게 다른 문제와달라 약간 까다로웠다.

findCircleNum([[1,1,0],[1,1,0],[0,0,1]]);
findCircleNum([[1,0,0],[0,1,0],[0,0,1]]);