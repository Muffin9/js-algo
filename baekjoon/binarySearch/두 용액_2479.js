// -2 4 -99 -1 98
// -99 -2 -1 4 98
// save ? ? ? ?
// sum
// sum > 0 right--
// sum < 0 left++
// left + right === 0 break
const [N, input] = require('fs').readFileSync('2479.txt').toString().trim().split("\n");

const solution = () => {
    const arr = input.split(" ").map(v => + v);
    arr.sort((a, b) => a - b);
    let save = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let right = arr.length - 1;
    const answer = new Array(2);

    while(left < right) {
        const sum = arr[left] + arr[right];

        if(Math.abs(sum) < save) {
            save = Math.abs(sum);
            answer[0] = arr[left];
            answer[1] = arr[right];
        }

        if(sum === 0) break;
        if(sum > 0) right -= 1;
        else if(sum < 0) left += 1;
    }

    console.log(answer.join(" "));
}

solution();