// attempts: 2, time: 8분
function calculateMeasure(num) {
    if(num === 1) return 1;
    let count = 2;
    for(let i = 2; i < num; i++) {
        if(num % i === 0) count += 1;
    }
    return count;
}

function solution(left, right) {
    let answer = 0;

    for(let num = left; num <= right; num++) {
        const N = calculateMeasure(num);
        N % 2 === 0 ? answer += num : answer -= num;
    }
    console.log(answer);
}

// solution(13, 17);
// solution(24, 27);
solution(1, 2);