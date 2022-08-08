// attempts: 2회, time: 5분
function solution(numbers) {
    let sum = 0;
    for(let i = 0; i < 10; i++) {
        if(!numbers.includes(i)) sum += i;
    }

    console.log(sum);
}

solution([1,2,3,4,6,7,8,0]);