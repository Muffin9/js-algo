// attempts: 2, time: 24분, 테스트케이스 5,6,7 실패
function solution(n, lost, reserve) {
    let answer = n - lost.length;
    // lost, reserve 정렬.
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    let lostLen = lost.length;
    let idx = 0;
    // lost, reserve 같은 학생이 있는지 체킹
    for(let i = 0; i < lostLen; i++) {
        const value = lost[idx];
        if(reserve.includes(value)) {
            lost.splice(idx, 1);
            reserve.splice(reserve.indexOf(value), 1);
            answer += 1;
        } else {
            idx += 1;
        }
    }


    for(let i = 0; i < lost.length; i++) {
        const value = lost[i];
        for(let j = 0; j < reserve.length; j++) {
            if(value === reserve[j] - 1 || value === reserve[j] + 1) {
                reserve.splice(j, 1);
                answer += 1;
                break;
            }
        }
    }
    return answer;
}

// solution(5, [4, 2, 5], [1, 2, 3, 5]); // 5
// solution(5, [2, 4], [3]);
// solution(5, [2, 3, 4], [1, 2, 3]); // 4
solution(4, [1, 4], [3, 5]) // 3
// solution(5, [4, 2], [5, 3]);