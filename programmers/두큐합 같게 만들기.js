// function solution(queue1, queue2) {
//   const queue = [...queue1, ...queue2];
//   let startIdx = 0;
//   let endIdx = queue2.length;
//   let queueSum1 = queue1.reduce((prev, cur) => (prev += cur), 0);
//   let queueSum2 = queue2.reduce((prev, cur) => (prev += cur), 0);
//   const sum = Math.floor((queueSum1 + queueSum2) / 2);

//   for (let i = 0; i < queue.length; i++) {
//     if (queueSum1 === sum) {
//       return i;
//     }

//     if (queueSum1 > sum) {
//       queueSum1 -= queue[startIdx];
//       startIdx += 1;
//     } else {
//       queueSum1 += queue[endIdx];
//       endIdx += 1;
//     }
//   }
//   return -1;
// }

function solution(queue1, queue2) {
  let answer = 0;
  let queueSum1 = queue1.reduce((a, b) => a + b);
  let queueSum2 = queue2.reduce((a, b) => a + b);
  const targetValue = Math.floor((queueSum1 + queueSum2) / 2);
  const totalLen = queue1.length * 3;

  while (answer <= totalLen) {
    if (queueSum1 > queueSum2) {
      let temp = queue1.shift();
      queue2.push(temp);
      queueSum2 += temp;
      queueSum1 -= temp;
    } else if (queueSum1 < queueSum2) {
      let temp = queue2.shift();
      queue1.push(temp);
      queueSum1 += temp;
      queueSum2 -= temp;
    } else {
      return answer;
    }
    answer += 1;
  }
  return -1;
}

solution([3, 2, 7, 2], [4, 6, 5, 1]);
solution([1, 2, 1, 2], [1, 10, 1, 2]);
solution([1, 1], [1, 5]);
