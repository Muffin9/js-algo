function solution(land) {

    const dp = new Array(land.length);
    for(let i = 0; i < land.length; i++) {
        dp[i] = [...land[i]];
    }
    
    for(let i = 1; i < land.length; i++) {
        dp[i][0] = land[i][0] + Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]);
        dp[i][1] = land[i][1] + Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]);
        dp[i][2] = land[i][2] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]);
        dp[i][3] = land[i][3] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
    }
    
    return Math.max(...dp[dp.length - 1]);
}

const land = [[1,2,3,5],[5,6,7,8],[4,3,2,1]];

solution(land);