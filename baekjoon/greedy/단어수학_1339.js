const input = require("fs")
  .readFileSync("1339.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const N = +input[0];
  const ALPHA_CAPITAL_START_CODE = 65;
  let ALPHA_CNT = 9;
  const alphaCntArr = new Array(26).fill(0);
  const wordsArr = new Array(N);

  for (let i = 0; i < N; i++) {
    const word = input[i + 1].split("").map((el) => {
      return { [el]: false };
    });
    wordsArr[i] = word;
  }

  const calculatedFrontWord = (words) => {
    let cnt = 0;
    words.forEach((arr) => {
      if (Object.values(arr)[0] === true) cnt += 1;
      else return cnt;
    });
    return cnt;
  };

  const sortingWordsArr = (wordsArr) => {
    wordsArr.sort((a, b) => {
      const word1Len = b.filter((el) => {
        return Object.values(el)[0] === false;
      }).length;
      const word2Len = a.filter((el) => {
        return Object.values(el)[0] === false;
      }).length;

      if (word1Len === word2Len) {
        // 필터했는데 두 개의 길이가 같을시 앞의 문자가 false가 먼저 나오는 순서로 계산
        const cnt1 = calculatedFrontWord(a);
        const cnt2 = calculatedFrontWord(b);
        return cnt1 - cnt2;
      }

      return word1Len - word2Len;
    }); // 문자 길이가 가장 긴 것 부터 계산하기 위해 내림차순 정렬
  };

  const checkWordsArr = (wordsArr) => {
    let flag = true;
    for (let i = 0; i < wordsArr.length; i++) {
      wordsArr[i].forEach((el) => {
        if (Object.values(el)[0] === false) {
          flag = false;
          return;
        }
      });
    }
    return flag;
  };

  const calculatedWordsArr = (wordsArr) => {
    let returnKey = "";
    wordsArr.forEach((arr) => {
      arr.forEach((el) => {
        for (const [key, value] of Object.entries(el)) {
          if (value === false && !returnKey) {
            alphaCntArr[key.charCodeAt(0) - ALPHA_CAPITAL_START_CODE] =
              ALPHA_CNT;
            ALPHA_CNT -= 1;
            returnKey = key;
            return;
          }
        }
      });
    });
    return returnKey;
  };

  const relocationWordsArr = (wordsArr, paramsKey) => {
    wordsArr.forEach((arr) => {
      arr.forEach((el) => {
        for (const key of Object.keys(el)) {
          if (key === paramsKey) el[key] = true;
        }
      });
    });
  };

  while (true) {
    if (checkWordsArr(wordsArr)) break;
    sortingWordsArr(wordsArr);
    const key = calculatedWordsArr(wordsArr); // testing
    relocationWordsArr(wordsArr, key);
  }

  let answer = 0;
  for (let i = 0; i < N; i++) {
    const word = input[i + 1].split("");
    let saveValue = "";
    for (let j = 0; j < word.length; j++) {
      saveValue +=
        alphaCntArr[word[j].charCodeAt(0) - ALPHA_CAPITAL_START_CODE];
    }
    answer += Number(saveValue);
  }
  console.log(answer);
};

solution();
