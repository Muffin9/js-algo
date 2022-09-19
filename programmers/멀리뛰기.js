// function solution(n) {
//     if (n < 2) return 1;
//     let answer = 0;

//     const recur = (count) => {
//         if(count > n) {
//             return;
//         }

//         if(count === n) {
//             answer += 1;
//             return;
//         }

//         recur(count + 1);
//         recur(count + 2);
//     }

//     recur(0);
//     console.log(answer % 1234567);
//     return answer;
// }

function solution(n) {
    if(n === 1) return 1;
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1] % 1234567;
    }
    console.log(dp[n] % 1234567);
    return dp[n] % 1234567;
}

solution(6); // 13
solution(5); // 8
solution(4); // 5 (1, 1, 1, 1) / (1, 2, 1) / (1, 1, 2) / (2, 1, 1) / (2, 2)
solution(3); // 3
solution(2); // 2
solution(1); // 1