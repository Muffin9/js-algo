function solution(ingredient) {
  let answer = 0;
  let stack = [];

  ingredient.forEach((el) => {
    stack.push(el);

    if (stack.length >= 4) {
      const find = stack.slice(-4).join("");
      if (find === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        answer += 1;
      }
    }
  });
  console.log(answer);
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);

// solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);
