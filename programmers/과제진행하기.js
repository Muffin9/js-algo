function solution(plans) {
  const sortedPlan = plans
    .map((plan) => {
      const [assignment, time, elapsedTime] = plan;
      const [hour, minute] = time.split(":");
      const convertedTime = +hour * 60 + +minute;

      return [assignment, convertedTime, +elapsedTime];
    })
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  const firstAssignment = sortedPlan.shift();
  let curTime = sortedPlan[1];

  const savedStack = [firstAssignment];

  while (sortedPlan.length) {
    const nextPlan = sortedPlan.shift();
    const [nextAssignment, nextTime, nextElapsedTime] = nextPlan;

    let diffTime = nextTime - curTime;
    curTime = nextTime;

    // while (savedStack.length && diffTime > 0) {
    //   const latestPlan = savedStack.pop();
    //   const [lName, _lTime, lSpend] = latestPlan;

    //   if (lSpend <= diffTime) {
    //     result.push(lName);
    //     diffTime -= lSpend;
    //   } else {
    //     latestPlan[2] = lSpend - diffTime;
    //     diffTime = 0;
    //     stack.push(latestPlan);
    //   }
    // }

    // stack.push(nextAssignment);
  }

  return result;
}

solution([
  ["korean", "11:40", "30"],
  ["english", "12:10", "20"],
  ["math", "12:30", "40"],
]);
