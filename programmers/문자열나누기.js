function solution(s) {
  let answer = 0;
  let cnt = 1;
  let nextCnt = 0;
  let saveStr = s[0];

  for (let i = 1; i < s.length; i++) {
    if (saveStr === s[i]) cnt += 1;
    else nextCnt += 1;

    if (cnt === nextCnt) {
      answer += 1;
      cnt = 0;
      nextCnt = 0;
      saveStr = s[i + 1];
    }
  }

  if (saveStr) answer += 1;

  return answer;
}

// solution("banana");
solution("abracadabra");
