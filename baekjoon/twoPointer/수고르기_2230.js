const [input, ...arr] = require('fs').readFileSync('2230.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.split(" ").map(Number);
    const nums = arr.map(Number).sort((a, b) => a - b);
    let left = 0;
    let right = 1;
    let answer = Number.MAX_SAFE_INTEGER;

    while(left <= right) {
        const absDiff = Math.abs(nums[left] - nums[right]);

        if(absDiff < M) {
            right += 1;
        } else {
            if(absDiff < answer) answer = absDiff;
            left += 1;
        }

        if(absDiff === M) break;
    }

    console.log(answer);
}

solution();