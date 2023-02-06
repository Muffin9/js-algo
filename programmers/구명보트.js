function solution(people, limit) {
  people.sort((a, b) => a - b);
  let cnt = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    const sum = people[left] + people[right];

    if (sum <= limit) {
      left += 1;
      right -= 1;
    } else {
      right -= 1;
    }
    cnt += 1;
  }

  return cnt;
}

// 50 50 70 80

solution([70, 50, 80, 50], 100);
solution([70, 80, 50], 100);
