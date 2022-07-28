const solution = (lottos, win_nums) => {
    const zeroCount = lottos.filter((el) => el === 0).length;
    const matchingNumCount = lottos.filter((el) => win_nums.includes(el)).length;
    const minNum = 7 - matchingNumCount >= 6 ? 6 : 7 - matchingNumCount;
    const maxNum = zeroCount + matchingNumCount === 6 ? 1 : minNum - zeroCount;
    return [maxNum, minNum];
};

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);