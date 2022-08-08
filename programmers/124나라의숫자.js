function solution(n) {
    // n을 3으로 나눴을때.
    // 나머지 0이면 4
    // 나머지 1이면 1
    // 나머지 2이면 2
    const result = [];
    while(n > 0) {
        const remain = Math.floor(n % 3);
        const share = Math.floor(n / 3);
        console.log(n);
        if(remain === 0) {
            result.push(4);
            n = share - 1;
        }
        else if(remain === 1) {
            result.push(1);
            n = share;
        }
        else if(remain === 2) {
            result.push(2);
            n = share;
        }
    }
    return result.reverse().join("");
}

solution(15);