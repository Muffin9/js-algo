// attempts: 2회, time: 3분
function solution(absolutes, signs) {
    const len = absolutes.length;
    let answer = 0;
    for(let i = 0; i < len; i++) {
        answer += signs[i] ? +absolutes[i] : -absolutes[i];
    }
    return answer;
}

solution([4,7,12], [true,false,true]);