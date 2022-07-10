const fs = require('fs');
const input = fs.readFileSync("12789.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();
    const nums = input.shift().split(" ").map(v => +v);
    let checkIdx = 1;
    let top = 0;
    const stack = [];
    

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== checkIdx) {
            while(top > 0, stack[top - 1] === checkIdx) {
                top--;
                checkIdx++;
            }
            stack[top++] = nums[i];
        } else {
            checkIdx += 1;
        }
    }
    while(top >= 1) {
        if(checkIdx === stack[top - 1]) {
            checkIdx += 1;
            top -= 1;
        } else {
            console.log("Sad");
            return;
        }
    }

    console.log('Nice');
}

solution();