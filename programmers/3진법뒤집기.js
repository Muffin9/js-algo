// attempts: 1, time: 15분
function calculateThreeNotation(n) {
    let numStr = '';
    while(true) {
        if(n === 0) return numStr;
        const share = Math.floor(n / 3);
        const remain = Math.floor(n % 3);
        numStr += remain;
        n = share;
    }
}

function solution(n) {
    let answer = 0;
    const nums = calculateThreeNotation(n);
    let idx = 0;
    for(let i = nums.length - 1; i >= 0; i--) {
        answer += (nums[i]) * Math.pow(3, idx);
        idx += 1;
    }
    return answer;
}

solution(45);
solution(125);