function solution(routes) {
  let cameraCnt = 1;
  routes.sort((a, b) => a[0] - b[0]);
  let outTime = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    if (routes[i][0] > outTime) {
      cameraCnt += 1;
      outTime = routes[i][1];
    }

    if (outTime > routes[i][1]) {
      outTime = routes[i][1];
    }
  }

  return cameraCnt;
}

solution([
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);
