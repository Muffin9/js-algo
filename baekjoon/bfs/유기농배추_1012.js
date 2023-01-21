let fs = require('fs');
let [T, ...input] = fs.readFileSync('1012.txt').toString().split('\n');


const solution = () => {
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];

    const BFS = (M, N, col, row, graph) => {
      const queue = [[col, row]];

      while(queue.length) {
        const [col, row] = queue.shift();

        for(let i = 0; i < 4; i++) {
          const ny = col + dy[i];
          const nx = row + dx[i];

          if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
          if(graph[ny][nx]) {
            graph[ny][nx] = 0;
            queue.push([ny, nx]);
          }
        }
      }
    }

    for(let i = 0; i < +T; i++) {
      const [N, M, K] = input.shift().split(" ").map(Number);
      const graph = Array.from(new Array(M), () => new Array(N).fill(0));
      let result = 0;
      
      for(let j = 0; j < K; j++) {
        const [col, row] = input.shift().split(" ").map(Number);
        graph[row][col] = 1;
      }
      
      for(let col = 0; col < M; col++) {
        for(let row = 0; row < N; row++) {
          if(graph[col][row]) {
            result += 1;
            BFS(M, N, col, row, graph);
          }
        }
      }
      console.log(result);
    }
}

solution();