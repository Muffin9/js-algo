// attempts: 1회, time: 4분
function solution(numbers) {
    const set = new Set();

    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            if(i === j || set.has(sum)) continue;
            set.add(numbers[i] + numbers[j]);
        }
    }
    const answer = [...set].sort((a, b) =>  a - b);
    return answer;
}

solution([2,1,3,4,1]);