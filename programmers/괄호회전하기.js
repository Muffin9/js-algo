function solution(s) {
  const strArr = s.split("");
  const brackets = { "}": "{", "]": "[", ")": "(" };
  let answer = 0;

  let saveStr = "";

  const isCorrectBracket = (arr) => {
    const stack = [];
    let isCorrect = true;

    for (let i = 0; i < arr.length; i++) {
      const bracket = arr[i];
      if (bracket === "{" || bracket === "[" || bracket === "(") {
        stack.push(bracket);
      } else {
        if (stack.length === 0) {
          return false;
        }
        const peekValue = stack[stack.length - 1];
        if (brackets[bracket] !== peekValue) {
          return false;
        } else stack.pop();
      }
    }

    if (stack.length) return false;
    return isCorrect;
  };

  for (let i = 0; i < s.length; i++) {
    const newArr = strArr.slice(i).concat(saveStr.split(""));
    const firstValue = newArr[0];
    saveStr += firstValue;
    if (isCorrectBracket(newArr)) answer += 1;
  }

  console.log(answer);
}

// solution("[](){}");
solution("}]()[{");
