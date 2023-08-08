const fs = require("fs");
const input = fs.readFileSync("1120.txt").toString().trim().split("\n");

function solution(arr) {
  const [a, b] = arr[0].split(" ");
  const smallStr = a.length > b.length ? b : a;
  const bigStr = a.length > b.length ? a : b;

  let len = bigStr.length - smallStr.length;
  let i = 0;
  let min = smallStr.length;

  while (len-- >= 0) {
    let cnt = 0;

    for (let j = 0; j < smallStr.length; j++) {
      if (smallStr[j] !== bigStr[j + i]) cnt += 1;
    }

    if (min >= cnt) min = cnt;

    i += 1;
  }

  return min;
}

console.log(solution(input));
