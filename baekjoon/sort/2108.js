const fs = require('fs');
const input = fs.readFileSync('2108.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.map(v => +v);

    const getAverage = (arr, len) => {
        const sum = arr.reduce((prev, cur) => cur += prev, 0);
        return Math.round(sum / len) === -0 ? 0 : Math.round(sum / len);
    }

    const getMid = (arr) => {
        const newArr = [...arr];
        newArr.sort((a, b) => a - b);
        return newArr[Math.floor(newArr.length / 2)];
    }

    const getMode = (arr) => {
        const modeObj = {};
        const modeList = [];
        let maxCount = 0;
     
        arr.forEach((num) => {
            if (!modeObj[num]) {
                modeObj[num] = 1;
            } else {
                modeObj[num]++;
            }
        });
     
        Object.keys(modeObj).forEach((key) => {
            const count = modeObj[key];
     
            if (maxCount <= count) {
                maxCount = count;
            }
        });
     
        Object.keys(modeObj).forEach((key) => {
            const count = modeObj[key];
     
            if (maxCount === count) modeList.push(+key);
        });
     
        modeList.sort((a, b) => a - b);
     
        if (modeList.length === 1) {
            return modeList[0];
        } else {
            return modeList[1];
        }
    }

    const getDiffMaxAndMin = (arr) => {
        return Math.max(...arr) - Math.min(...arr);
    }


    console.log(getAverage(arr, N));
    console.log(getMid(arr));
    console.log(getMode(arr));
    console.log(getDiffMaxAndMin(arr));
}

solution();