const input = require('fs').readFileSync('게임개발.txt').toString().split("\n");

// function solution() {
//     const[n, m] = input.shift().split(" ").map(v => +v);
//     const visited = Array.from(new Array(n), () => new Array(m).fill(0));
//     let [x, y, direction] = input.shift().split(" ").map(v => +v);
//     const maps = [];
//     input.forEach((m, idx) => {
//         maps[idx] = m.split(" ").map(v => +v)
//     });
//     console.log(maps);
//     visited[x][y] = 1;
//     // 북 동 남 서
//     const dx = [-1, 0, 1, 0];
//     const dy = [0, 1, 0, -1];

//     const turn_left = () => {
//         direction -= 1;
//         if (direction === -1) direction = 3;
//     }

//     let count = 1;
//     let turnTime = 0;

//     while(true) {
//         turn_left();
//         let nextX = x + dx[direction];
//         let nextY = y + dy[direction];

//         if(visited[nextX][nextY] === 0 && maps[nextX][nextY] === 0) {
//             visited[nextX][nextY] = 1;
//             x = nextX;
//             y = nextY;
//             count += 1;
//             turnTime = 0;
//             continue;
//         } else {
//             turnTime += 1;

//             if(turnTime === 4) {
//                 nextX = x - dx[direction];
//                 nextY = y - dy[direction];

//                 if(maps[nextX][nextY] === 0) {
//                     x = nextX;
//                     y = nextY;
//                 } else break;
                
//                 turnTime = 0;
//             }
//         }
//     }
    
//     console.log(count);
// }

function solution() {
}

solution();