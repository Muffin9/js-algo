const input = require("fs")
  .readFileSync("1543.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  //   const arr = input[0];
  //   const target = input[1];
  //   const len = target.length;
  //   let answer = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === target[0]) {
  //       const standard = arr.slice(i, len + i);
  //       if (standard === target) {
  //         answer += 1;
  //         i += len - 1;
  //       }
  //     }
  //   }
  //   console.log(answer);

  const document = input.shift();
  const word = input.shift();
  console.log(document.split(word).length - 1);
};

solution();
