let fs = require('fs');
let [testCase, ...input] = fs.readFileSync('1012.txt').toString().split('\n');


const solution = () => {
    const moveX = [-1 ,1 ,0, 0];
    const moveY = [0, 0, -1, 1];

    const bfs = (graph, N, M, sx, sy) => {
        const queue = [[sx, sy]];

        while(queue.length) {
            const [x, y] = queue.shift();
            if(!graph[x][y]) continue;
            else graph[x][y] = 0;   

            for(let i = 0; i < 4; i++) {
                const nextX = x + moveX[i];
                const nextY = y + moveY[i];
                if(nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) continue;
                if(graph[nextX][nextY]) queue.push([nextX, nextY]);
            }
        }
    }

    for(let i = 0; i < +testCase; i++) {
        const [M, N, K] = input.shift().split(' ').map(v => +v);
        const graph =  Array.from({length: N}, () => new Array(M).fill(0));
        for(let j = 0; j < K; j++){
            const [v1, v2] = input.shift().split(' ').map(v => +v);
            graph[v2][v1] = 1;
        }

        let result = 0;

        for(let i = 0 ; i < N ; i++){
          for(let j = 0 ; j < M ; j++){
            if(graph[i][j]) {
              result += 1;
              bfs(graph, N, M, i, j);
            }
          }
        }
        console.log(result);
    }
}

solution();