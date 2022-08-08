// attempts: 2, time: 15분, 테스트케이스 50% 통과
// 각 one, two, three가 가지고 있는 값으로 나누는게 아닌 인덱스를 나눠줘야 한다.
function solution(answers) {
    const one = [1, 2, 3, 4, 5]; // 5
    const two = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10
    const checkCount = new Array(3).fill(0);

    for(let i = 0; i < answers.length; i++) {
        if(one[i % 5] === answers[i]) checkCount[0] += 1;
        if(two[i % 8] === answers[i]) checkCount[1] += 1;
        if(three[i % 10] === answers[i]) checkCount[2] += 1;
    }

    const result = [];
    let maxValue = Math.max(...checkCount);
    
    for(let j = 0; j < checkCount.length; j++) {
        if(maxValue === checkCount[j]) result.push(j + 1);
    }

    return result;
}

solution([1, 2, 3, 4, 5]); // [4,0,0];
solution([1, 3, 2, 4, 2]) // [1,2,3];