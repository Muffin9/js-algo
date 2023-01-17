const getCombination = (arr, num) =>  {
    const results = [];
    if(num === 1) return arr.map(v => [v]);

    arr.forEach((element, idx, originArr) => {
        const restArr = originArr.slice(idx + 1);
        const combinations = getCombination(restArr, num - 1);
        const attachedArr = combinations.map(v => [element, ...v]);
        results.push(...attachedArr);
    });

    return results;
}