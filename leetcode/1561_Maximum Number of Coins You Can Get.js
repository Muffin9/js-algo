/**
 * @param {number[]} piles
 * @return {number}
 */
 var maxCoins = function(piles) {
    // 1 8 9
    // 2 6 7
    // 3 4 5
    piles.sort((a, b) => a - b); // 오름차순 정렬시키자.
    
    let endIdx = piles.length - 1;
    const result = [];
    for(let i = 0; i < piles.length / 3; i++) {
        result.push(piles[endIdx - 1]);
        endIdx -= 2;
    }

    return result.reduce((prev, cur) => prev += cur, 0);
};

maxCoins([9,8,7,6,5,1,2,3,4]);
maxCoins([2, 4, 5]);