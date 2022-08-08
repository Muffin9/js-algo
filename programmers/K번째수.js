// attempts: 2, time: 7분
function solution(array, commands) {
    const result = [];
    for(let i = 0; i < commands.length; i++) {
        const start = commands[i][0];
        const end = commands[i][1];
        const selectedNum = commands[i][2] - 1;
        const arr = array.slice(start - 1, end).sort((a, b) => a - b);
        result.push(arr[selectedNum]);
    }
    return result;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);