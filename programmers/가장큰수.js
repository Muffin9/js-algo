// 테스트케이스 11번 실패.. 0인 배열이 올때 처리를 해주면 된다는데 통과가 안된다.

function solution(numbers) {
    if((numbers.reduce((prev, cur) => cur += prev, 0) === 0)) return 0;
    const arr = numbers.map((num) => {
        return num.toString();
    });
    
    const answer = arr.sort((a, b) => {
        const c = parseInt(a + b);
        const d = parseInt(b + a);
        if(c > d) return -1;
        else if (c < d) return 1;
        else return 0;
    }).join("");

    return answer;
}

// solution([6, 10, 2]);
// solution([3, 30, 34, 5, 9]);
solution([0,0,0,0]);