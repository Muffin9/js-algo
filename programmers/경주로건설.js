// TestCase 2개 실패.
function solution(board) {
  // 코너 조건 ?
  // col 방향으로 움직였을때 이전 row가 변하는 시점, row 방향으로 움직였을때 이전 col가 변하는 시점.
  const len = board.length;
  const visited = Array(len)
    .fill()
    .map(() =>
      Array(len)
        .fill()
        .map(() => Array(4).fill(Infinity))
    );
  // 방향이 바뀌면 600원.
  const dy = [-1, 1, 0, 0]; // 북, 남 일때 1
  const dx = [0, 0, -1, 1]; // 서, 동 일 때 0

  const bfs = (r, c) => {
    const queue = [
      [0, 0, 0, 0],
      [0, 0, 0, 3],
    ]; // row, col, cost, dir

    while (queue.length) {
      const [r, c, cost, dir] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = c + dx[i];
        const ny = r + dy[i];

        if (nx < 0 || ny < 0 || nx >= len || ny >= len || board[ny][nx] === 1)
          continue;

        const direction = i < 2 ? 0 : 1;
        const nxCost = dir === direction || (r === 0 && c === 0) ? 100 : 600;
        if (visited[ny][nx][i] === 0 || visited[ny][nx][i] >= cost + nxCost) {
          visited[ny][nx][i] = cost + nxCost;
          queue.push([ny, nx, cost + nxCost, direction]);
        }
      }
    }
  };

  bfs(0, 0);

  return Math.min(...visited[len - 1][len - 1]);
}

// solution([
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]);

solution([
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 0],
]);
