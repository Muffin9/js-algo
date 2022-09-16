/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const result = new Array(k).fill(0);
    const map = new Map();

    for(let i = 0; i < logs.length; i++) {
        const values = map.get(logs[i][0]);
        if(!values) map.set(logs[i][0], [logs[i][1]]);
        else if(values.includes(logs[i][1])) continue;
        else map.set(logs[i][0], [...values,logs[i][1]]);
    }

    for(const userMin of map.values()) {
        if(userMin.length) {
            result[userMin.length - 1] += 1;
        }
    }

    console.log(result);
};

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes2 = function (logs, k) {
    const arr = Array(k).fill(0)

    const map = logs.reduce((acc, [userId, time]) => {
        if (!acc.has(userId)) {
        acc.set(userId, new Set())
        }
        acc.set(userId, acc.get(userId).add(time))
        return acc
    }, new Map())

    for (const value of map.values()) {
        arr[value.size - 1]++
    }

    return arr;
}

findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]], 5);
// findingUsersActiveMinutes([[1,1],[2,2],[2,3]], 4)