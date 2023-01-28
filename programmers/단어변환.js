function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  const visited = [];

  const checkCount = (word, str) => {
    let correctCount = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== str[j]) correctCount += 1;
    }
    return correctCount;
  };

  const bfs = (begin, count) => {
    const queue = [[begin, count]];

    while (queue.length) {
      let [str, cnt] = queue.shift();

      if (str === target) {
        return cnt;
      }

      words.forEach((word) => {
        if (visited.includes(word)) return;

        const correctCount = checkCount(word, str);

        if (correctCount === 1) {
          cnt += 1;
          queue.push([word, cnt]);
          visited.push(word);
        }
      });
    }
  };

  return bfs(begin, 0);
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
