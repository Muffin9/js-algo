/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let count = 0;
    const visited = new Array(n).fill(false);

    const isPossible = (i, idx) => {
        return idx % i === 0 || i % idx === 0;
    }

    const backtracking = (idx, arr) => {
        if(idx > n) {
            count += 1;
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (!isPossible(i, idx) || visited[i]) { 
                continue;
            }

            const newArray = arr.slice()
            newArray.push(i);
            visited[i] = true;
            backtracking(idx + 1, newArray);
            console.log(newArray, idx)
            visited[i] = false;
        }
    }

    backtracking(1, []);

    console.log(count);
};

countArrangement(4);