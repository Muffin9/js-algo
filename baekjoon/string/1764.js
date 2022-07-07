const fs = require('fs');
const input = fs.readFileSync("1764.txt").toString().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const arr1 = new Set(input.splice(0, N));
    const arr2 = new Set(input.splice(0));
    const result = [];

    arr1.forEach((element) => {
        if(arr2.has(element)) result.push(element);
    });
    result.sort();
    console.log(result.length);
    console.log(result.join("\n"))
}
solution();