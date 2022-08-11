// attempts: 2, time: 15분
function solution(N, stages) {
    const arr = [];
    

    for(let i = 1; i <= N; i++) {
        const notClearPerson = stages.filter(s => s === i).length;
        const reachedPerson = stages.filter(s => s >= i).length;
        const failRateObj = { idx: i, value: notClearPerson / reachedPerson};
        arr.push(failRateObj);
    }

    arr.sort((a ,b) => { return b.value - a.value; });

    return arr.map(value => value.idx);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4,4,4,4,4]);