function solution(storey) {
    let answer = 0;
    let value = storey;
    
    while(value !== 0) {
        const remainder = ~~(value % 10);

        // 나머지가 6이상 일때.
        if(remainder >= 6) {
            answer += 10 - remainder;
            value += 10 - remainder;
        } 
        // 나머지가 5이며, 앞의자리가 5이상일때
        else if(remainder === 5 && ~~(value / 10) % 10 >= 5) {
            answer += 10 - remainder;
            value += 10 - remainder;
        }
        // 앞의 두조건을 만족하지 않을때.
        else {
            answer += remainder;
        }
        
        value = ~~(value / 10);
    }
    
    return answer;
}

solution(155) // 11
solution(154) // 10
solution(545) // 14
solution(95) // 6