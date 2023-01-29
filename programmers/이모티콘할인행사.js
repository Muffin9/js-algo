function solution(users, emoticons) {
  const salePercent = [10, 20, 30, 40];
  const permutations = [];
  const result = [0, 0]; // 이모티콘 서비스 가입자 수, 이모티콘 판매액 최대값

  const calculateCombi = (arr, idx) => {
    if (idx === emoticons.length) {
      permutations.push([...arr]);
      return;
    }

    for (let i = 0; i < salePercent.length; i++) {
      arr.push(salePercent[i]);
      calculateCombi(arr, idx + 1);
      arr.pop();
    }
  };

  calculateCombi([], 0);

  for (let i = 0; i < permutations.length; i++) {
    const applyPercent = permutations[i];
    let emotionPlusCnt = 0;
    let totalPrice = 0;
    for (let j = 0; j < users.length; j++) {
      let userSumPrice = 0;

      const [userPercent, userPrice] = users[j];

      for (let k = 0; k < emoticons.length; k++) {
        if (applyPercent[k] >= userPercent) {
          userSumPrice += emoticons[k] - emoticons[k] * (applyPercent[k] / 100);
        }
      }

      if (userSumPrice >= userPrice) emotionPlusCnt += 1;
      else totalPrice += userSumPrice;
    }

    if (emotionPlusCnt > result[0]) {
      result[0] = emotionPlusCnt;
      result[1] = totalPrice;
    } else if (result[0] === emotionPlusCnt && totalPrice > result[1]) {
      result[1] = totalPrice;
    }
  }
  console.log(result);
  return result;
}

const users = [
  [40, 10000],
  [25, 10000],
];
const emoticons = [7000, 9000];

solution(users, emoticons);
