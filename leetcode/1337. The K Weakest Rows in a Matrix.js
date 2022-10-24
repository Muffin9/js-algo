/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const arr = [];
    for(let i = 0; i < mat.length; i++) {
        let count = 0;
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] === 0) break;
            count += 1;
        }
        arr.push(count);
    }
    
    const numObj = arr.map((num, idx) => {
        const obj = {};
        obj.idx = idx;
        obj.num = num;
        return obj;
    })

    const sortedObj = Array.from(numObj.sort((a, b) => a.num - b.num));
    const result = sortedObj.slice(0, k).map((el) => {
        return el.idx;
    });

    console.log(result);
};

kWeakestRows(
    [[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 3
    );
