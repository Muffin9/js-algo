function solution(n, wires) {
  let answer = 98;
  const graph = Array.from(new Array(n + 1), () => []);

  for (let i = 0; i < wires.length; i++) {
    const [v1, v2] = wires[i];
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  const dfs = (node, expectNode, visited) => {
    let cnt = 1;
    for (let i = 0; i < graph[node].length; i++) {
      if (graph[node][i] === expectNode || visited[graph[node][i]]) continue;
      visited[graph[node][i]] = true;
      cnt += dfs(graph[node][i], expectNode, visited);
    }
    return cnt;
  };

  for (let i = 0; i < wires.length; i++) {
    const [v1, v2] = wires[i];
    const visited = new Array(n + 1).fill(false);

    const value = Math.abs(dfs(v1, v2, visited) - dfs(v2, v1, visited));
    answer = Math.min(answer, value);
  }

  return answer;
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
