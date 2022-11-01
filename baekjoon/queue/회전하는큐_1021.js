const [values, order] = require("fs")
    .readFileSync("1021.txt")
    .toString()
    .split("\n");

const solution = () => {
    const [N, M] = values.split(" ").map((v) => +v);
    const arr = new Array(N);
    const nums = order.split(" ").map((v) => +v);
    for (let i = 0; i < N; i++) {
        arr[i] = i + 1;
    }

    let count = 0;
    while (nums.length !== 0) {
        if (arr[0] === nums[0]) {
            arr.shift();
            nums.shift();
        } else {
            const findIdx = arr.findIndex((element) => element === nums[0]);
            if (arr.length - findIdx <= ~~(arr.length / 2)) {
                arr.unshift(arr.pop());
            } else {
                arr.push(arr.shift());
            }
            count += 1;
        }
    }
    console.log(count);
};

solution();
