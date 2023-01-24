const [N, input] = require("fs")
  .readFileSync("2491.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const ascdp = new Array(+N).fill(1);
  const descdp = new Array(+N).fill(1);
  const arr = input.split(" ").map(Number);

  let currentValue = ascdp[0];
  for (let i = 1; i < +N; i++) {
    if (arr[i] >= arr[i - 1]) ascdp[i] = ascdp[i - 1] + 1;
    else ascdp[i] = 1;
  }
  for (let i = 1; i <= +N; i++) {
    if (arr[i] <= arr[i - 1]) descdp[i] = descdp[i - 1] + 1;
    else descdp[i] = 1;
  }

  const ascMaxValue = Math.max(...ascdp);
  const descMaxValue = Math.max(...descdp);
  if (ascMaxValue > descMaxValue) console.log(ascMaxValue);
  else console.log(descMaxValue);
};

solution();
