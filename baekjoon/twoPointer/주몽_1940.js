const input = require('fs').readFileSync('1940.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input[0];
    const M = +input[1];
    const ingredient = input[2].split(" ").sort((a, b) => a - b).map(Number);
    let answer = 0;
    let left = 0;
    let right = N - 1;
    
    
    while(left < right) {
        const sum = ingredient[left] + ingredient[right];
        if(sum === M) {
            answer += 1;
        }

        if(sum > M) right -= 1;
        else left += 1;
    }
    console.log(answer);
}

solution();