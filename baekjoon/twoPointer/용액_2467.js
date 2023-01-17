const [N, input] = require('fs').readFileSync('2467.txt').toString().trim().split("\n");

const solution = () => {
    const arr = input.split(" ").map(Number).sort((a, b) => a - b);
    
    let answer = [];
    let left = 0;
    let right = +N - 1;
    let target = Number.MAX_SAFE_INTEGER;

    while(left < right){
        const sum = arr[left] + arr[right];

        if(Math.abs(target) >= Math.abs(sum)) {
            target = sum;
            answer = [arr[left], arr[right]]
        }

        if(sum === 0) break;
        else if(sum > 0) right -= 1;
        else left += 1;
    }

    console.log(answer.join(" "));
}

solution();