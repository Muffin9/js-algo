// attempts: 2, time: 5분
function solution(d, budget) {
    let sum = 0;
    let count = 0;
    d.sort((a, b) => a - b);
    for(let i = 0; i < d.length; i++) {
        sum += d[i];
        if(sum > budget) return count;
        count += 1;
    }
    return count;
}

solution([1, 3, 2, 5, 4], 9);