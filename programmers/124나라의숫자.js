function solution(n) {
    // n을 3으로 나눴을때.
    // 나머지 0이면 4
    // 나머지 1이면 1
    // 나머지 2이면 2
    const result = [];
    while(n > 0) {
        const share = parseInt(n / 3);
        const remain = n % 3;

        if(remain === 0) {
            result.push(4);
            n = share - 1;
        }
        else if(remain === 1 || remain === 2) {
            result.push(remain);
            n = share;
        }
    }
    let answer = '';
    while(result.length !== 0) {
        answer += result.pop();
    }
    console.log(answer);

    return answer;
}

solution(20);