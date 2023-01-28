// attempts: 2, time: 5분
function solution(numbers, target) {
  let answer = 0;
  const dfs = (idx, sum) => {
    if (idx > numbers.length) return;
    if (idx === numbers.length && sum === target) {
      answer += 1;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0);
  console.log(answer);
}

// solution([1, 1, 1, 1, 1], 3);
solution([4, 1, 2, 1], 4);
