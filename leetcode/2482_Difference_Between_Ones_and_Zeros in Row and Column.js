/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const answer = Array.from(new Array(grid.length), () => []);
    const m = grid.length;
    const n = grid[0].length;
    const onesRow = new Array(m).fill(0);
    const onesCol = new Array(n).fill(0);

    
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === 1) onesRow[i] += 1;
        }
    }
    
    // 행 구할때 주의!  j -> row, i -> col 개수를 기준으로 계산해줘야한다.
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[j][i] === 1) onesCol[i] += 1;
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {   
            answer[i][j] = onesRow[i] + onesCol[j] - (m - onesRow[i]) - (n - onesCol[j]);
        }
    }

    console.log(answer);
};

onesMinusZeros([[0,1,1],[1,0,1],[0,0,1]]);