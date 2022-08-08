// 두번쨰 풀이, 15분 소요.
// maxNum을 구하는 부분에서 zeroCOunt, correctCount 값이 모두 0일때도 고려했어야 했다.
const solution = (lottos, win_nums) => {
    const zeroCount = lottos.filter((v) => v === 0).length;
    const correctCount = lottos.filter((v) => win_nums.includes(v)).length;
    const maxNum = zeroCount + correctCount === 0 ? 6 : 7 - (zeroCount + correctCount);
    const minNum = correctCount === 0 ? 6 : 7 - correctCount;
    return [maxNum, minNum];
};

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]); // [3 , 5]