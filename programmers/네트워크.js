function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let network = 0;

  const dfs = (node) => {
    visited[node] = true;
    const nodeValues = computers[node];
    for(let i = 0; i < n; i++) {
      if(nodeValues[i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for(let i = 0; i < n; i++) {
    if(!visited[i]) {
      dfs(i);
      network += 1;
    }
  }

  dfs(0);
  return network;
}

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]);
solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]);