const fs = require('fs');
const input = fs.readFileSync('16953.txt').toString().trim();

const solution = () => {
    let [A, B] = input.split(" ").map(v => +v);
    let count = 1;

    const getLastNumber = (number) => {
        return Number(String(number).split('')[String(number).split('').length - 1]);
    }
    
    while(A !== B) {
        if(A > B) {
            console.log(-1);
            return;
        } else if(getLastNumber(B) === 1) {
            const splitedValue = String(B).split('');
            splitedValue.pop();
            B = splitedValue.join('');
            // B = Number(B.toString().substring(0, B.toString().length - 1)); 
        } else if(B % 2 === 0) {
            B = Math.floor(B / 2);
        }
        count += 1;
    }
    console.log(count);
}

solution();