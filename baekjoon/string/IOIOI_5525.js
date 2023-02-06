const [N, M, S] = require("fs")
  .readFileSync("5525.txt")
  .toString()
  .trim()
  .split("\n");

// const solution = () => {
//   let findStr = "IOI";

//   for (let i = 0; i < +N - 1; i++) {
//     findStr += "OI";
//   }
//   const len = findStr.length;
//   let answer = 0;
//   console.log(findStr);
//   for (let i = 0; i < S.length - len; i++) {
//     const str = S.slice(i, i + len);

//     if (str === findStr) answer += 1;
//   }
//   console.log(answer);
// };

// 어차피 문자는 I아니면 O가 나오기 때문에, IOI 패턴이 반복되는 체킹하면서 횟수를 저장시키는 방식으로 다시 구현
const solution = () => {
  let answer = 0;
  let cnt = 0;

  for (let i = 1; i < +M - 1; i++) {
    if (S[i - 1] === "I" && S[i] === "O" && S[i + 1] === "I") {
      cnt += 1;

      if (cnt === +N) {
        answer += 1;
        cnt -= 1;
      }
      i += 1;
    } else {
      cnt = 0;
    }
  }

  console.log(answer);
};

solution();
