/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dx = [0, 1, 0, -1]; // col
  const dy = [-1, 0, 1, 0]; // row

  const rowLen = grid.length;
  const colLen = grid[0].length;

  const visited = new Array(rowLen).fill(new Array(colLen).fill(false));

  let islandCount = 0;

  const bfs = (y, x) => {
    const queue = [[y, x]];
    visited[y][x] = true;
    while (queue.length) {
      const [y, x] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextX = x + dx[i];
        const nextY = y + dy[i];

        if (nextX < 0 || nextY < 0 || nextX >= colLen || nextY >= rowLen)
          continue;

        if (grid[nextY][nextX] === "1" && !visited[nextY][nextX]) {
          visited[nextY][nextX] = true;
          queue.push([nextY, nextX]);
        }
      }
    }
  };

  for (let y = 0; y < rowLen; y++) {
    for (let x = 0; x < colLen; x++) {
      if (!visited[y][x] && grid[y][x] === "1") {
        islandCount += 1;
        bfs(y, x);
      }
    }
  }

  console.log(islandCount);
};

numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);

numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
