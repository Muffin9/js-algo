const fs = require("fs");
const input = fs.readFileSync("1026.txt").toString().trim().split("\n");

function solution(arr) {
  // a ->오름차순
  // b -> 내림차순
  // a * b -> 최소값 도출

  const sortedA = arr[1].split(" ").sort((a, b) => a - b);
  const sortedB = arr[2].split(" ").sort((a, b) => b - a);
  let result = 0;

  sortedA.forEach((num, idx) => {
    result += num * sortedB[idx];
  });

  return result;
}

console.log(solution(input));
