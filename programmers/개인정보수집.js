function solution(today, terms, privacies) {
  const privacy = new Map();
  const result = [];

  terms.forEach((term) => {
    const [k, d] = term.split(" ");
    privacy.set(k, +d * 28);
  });

  console.log(privacy);

  const checkPrivate = (today, date, kind) => {
    // 년.월.일 / 약관종류를 받아 해당 개인정보가 파기될 정보라면 true를 리턴하는 함수
    const [TY, TM, TD] = today.split(".").map(Number);
    const [Y, M, D] = date.split(".").map(Number);
    const todayDate = TM * 28 + TD;
    const privacyDate = M * 28 + D;
    let calcualtedDate = todayDate - privacyDate;

    if (TY - Y > 0) calcualtedDate += (TY - Y) * 12 * 28;

    if (privacy.get(kind) <= calcualtedDate) return true;
    return false;
  };

  for (let i = 0; i < privacies.length; i++) {
    const [date, kind] = privacies[i].split(" ");
    if (checkPrivate(today, date, kind)) result.push(i + 1);
  }

  return result;
}

// const today = "2022.05.19";
// const terms = ["A 6", "B 12", "C 3"];
const today = "2020.01.01";
const terms = ["Z 3", "D 5"];
// const privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"];
const privacies = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2018.12.28 Z",
];

solution(today, terms, privacies);
