function solution(k, dungeons) {
  let answer = [];
  const len = dungeons.length;
  const visited = new Array(len).fill(false);
  const dfs = (idx, sum) => {
    answer.push(idx);

    for (let i = 0; i < len; i++) {
      if (visited[i] || sum < dungeons[i][0]) continue;
      visited[i] = true;
      dfs(idx + 1, sum - dungeons[i][1]);
      visited[i] = false;
    }
  };

  dfs(0, k);

  return Math.max(...answer);
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
