function solution(name, yearning, photo) {
  const photoCnt = photo.length;
  const dataCnt = name.length;

  const answer = new Array(photoCnt);

  // name : yearning으로 된 map으로 데이터 만들어주기.

  const map = new Map();
  for (let i = 0; i < dataCnt; i++) {
    map.set(name[i], yearning[i]);
  }

  for (let i = 0; i < photoCnt; i++) {
    let cnt = 0;

    for (let j = 0; j < photo[i].length; j++) {
      if (!map.has(photo[i][j])) continue;
      cnt += map.get(photo[i][j]);
    }

    answer[i] = cnt;
  }

  return answer;
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);
