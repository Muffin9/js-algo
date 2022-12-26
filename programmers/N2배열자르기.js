// 시간초과 발생.
function solution(n, left, right) {
    const map = Array.from({length: n }, () => new Array(n).fill(0));

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            map[i - 1][j - 1] = Math.max(i, j);
        }
    }
    const oneMap = map.reduce((acc, cur) => {
        return acc.concat(cur);
    }, []);

    return oneMap.slice(left, right + 1);
}

// 좌표를 전환해서 풀이해야함

function solution(n, left, right) {
    
}

solution(3, 2, 5);