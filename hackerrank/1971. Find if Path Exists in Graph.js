/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
 var validPath = function(n, edges, source, destination) {
    const graph = Array.from({length: n}, () => []);
    const visited = new Array(n).fill(false);
    for(let i = 0; i < edges.length; i++) {
        const [v1, v2] = edges[i];
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    const dfs = (node) => {
        visited[node] = true;
        const connectedNodes = graph[node];
        for(let i = 0; i < connectedNodes.length; i++) {
            if(!visited[connectedNodes[i]]) {
                visited[connectedNodes[i]] = true;
                dfs(connectedNodes[i]);
            }
        }
    }
    
    dfs(source);
    return visited[destination];
};