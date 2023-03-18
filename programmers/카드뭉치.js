function solution(cards1, cards2, goal) {
  let cardIdx1 = 0;
  let cardIdx2 = 0;

  for (let word of goal) {
    if (cards1[cardIdx1] === word) cardIdx1 += 1;
    else if (cards2[cardIdx2] === word) cardIdx2 += 1;
    else return "No";
  }

  return "Yes";
}

solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
