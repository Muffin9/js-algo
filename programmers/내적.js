// attempts: 2회, time: 2분
function solution(a, b) {
    const len = a.length;
    let answer = 0;
    for(let i = 0; i < len; i++) {
        answer += a[i] * b[i];
    }
    console.log(answer);
}

solution([1,2,3,4], [-3,-1,0,2]);