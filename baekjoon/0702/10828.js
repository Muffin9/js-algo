const fs = require('fs');
const input = fs.readFileSync('10828.txt').toString().split("\n");

const solution = () => {
    let N = Number(input.shift());
    const arr = [];
    
    const printArr = (num) => {
        console.log(num);
    }

    while(N--) {
        const [command, num] = input.shift().split(" ");
        switch(command) {
        case "push":
            arr.push(+num);
            break;
        case "top":
            const topValue = arr.length === 0 ? -1 : arr[arr.length - 1];
            printArr(topValue);
            break;
        case "size":
            printArr(arr.length);
            break;
        case "empty":
            const checkArr = arr.length === 0 ? 1 : 0;
            printArr(checkArr);
            break;
        case "pop":
            const value = arr.pop();
            printArr(value || -1);
            break;
    }
    }
}

solution();