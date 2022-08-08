// attempts: 2, time: 5분
function solution(numbers, target) {
    let answer = 0;
    const recur = (idx, sum) => {
        if(idx > numbers.length) return;
        if(idx === numbers.length) {
            if(target === sum) {
                answer += 1;
                return;
            }
        }

        recur(idx + 1, sum +numbers[idx]);
        recur(idx + 1, sum -numbers[idx]);
    }

    recur(0, 0);
    console.log(answer);
}

solution([1, 1, 1, 1, 1], 3);