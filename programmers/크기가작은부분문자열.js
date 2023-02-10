function solution(t, p) {
  let answer = 0;

  const pLen = p.length;

  for (let i = 0; i < t.length - pLen + 1; i++) {
    const newStr = t.slice(i, i + pLen);

    if (Number(newStr) <= Number(p)) {
      answer += 1;
    }
  }

  return answer;
}

// solution("3141592", "271");
solution("500220839878", "7");
