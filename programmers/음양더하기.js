function solution(absolutes, signs) {
    let answer = 0;
    for(let i = 0; i < absolutes.length; i++) {
        const value = signs[i] ? absolutes[i] : -absolutes[i];
        answer += value;
    }
    return answer;
}

solution([4,7,12], [true,false,true]);