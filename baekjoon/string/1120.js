const fs = require('fs');
const input = fs.readFileSync("1120.txt").toString();

const solution = () => {
    const [str1, str2] = input.split(" ");
    let word1 = str1.split("");
    let word2 = str2.split("");
    let answer = str1.length;

    for (let i = 0; i <= str2.length - str1.length; i++) {
        let differWord = word1.filter((el, idx) => el !== word2[idx + i]).length;
        answer = Math.min(differWord, answer);
    }
    console.log(answer);
}

solution();