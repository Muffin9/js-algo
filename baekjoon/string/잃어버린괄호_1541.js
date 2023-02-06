const input = require("fs").readFileSync("1541.txt").toString().trim();

// '-' 뒤에 오는 식을 전부 뺄셈 처리하면 식의 값이 최소
// const solution = () => {
//   const arr = input.split("-").map((str) =>
//     str
//       .split("+")
//       .map(Number)
//       .reduce((prev, cur) => prev + cur, 0)
//   );
//   let answer = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     answer -= arr[i];
//   }
//   console.log(answer);
// };

const solution = () => {
  const arr = input.split("-").map((str) =>
    str
      .split("+")
      .map(Number)
      .reduce((prev, cur) => prev + cur, 0)
  );

  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer -= arr[i];
  }
  console.log(answer);
};

solution();
