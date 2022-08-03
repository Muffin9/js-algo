const fs = require('fs');
const input = fs.readFileSync('12919.txt').toString().trim().split("\n");

const solution = () => {
    const S = input.shift();
    const T = input.shift();
    let flag = false;
    
    const recur = (s, t) => {
        if(s === t) {
            flag = true;
            console.log('1');
            return;
        }

        if(s.length > t.length) return;

        if(t[t.length - 1] === 'A') {
            const temp = t.split("");
            temp.pop();
            recur(s, temp.join(""));
        }

        if(t[0] === 'B') {
            const temp = t.split("").reverse();
            temp.pop();
            recur(s, temp.join(""));
        }
    }

    recur(S, T);
    if(!flag) console.log('0');
}

solution();