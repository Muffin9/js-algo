const fs = require('fs');
const input = fs.readFileSync('1966.txt').toString().trim().split("\n");

const solution = () => {
    const testCase = +input.shift();

    const isExistHigherValue = (arr, num) => {
        if(arr.length === 0) return true;
        const maxValue = Math.max(...arr);
        return maxValue <= num ? true : false;
    }
    
    for(let i = 0; i < testCase; i++) {
        const [N, M] = input.shift().split(" ").map(v => +v);
        let count = 1;
        const arr = input.shift().split(" ").map((v, idx) => {
            const obj = {};
            obj.value = +v;
            obj.isSearch = +idx === M ? true : false;
            return obj;
        });

        while(true) {
            const front = arr.shift();
            
            if(front.isSearch === true && isExistHigherValue(arr.map(v => v.value), front.value)) {
                console.log(count);
                break;
            } else if(front.isSearch === false && isExistHigherValue(arr.map(v => v.value), front.value)) {
                count += 1;
                continue;
            } else arr.push(front);
        }
    }

}

solution();