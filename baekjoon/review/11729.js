const fs = require('fs');
const input = fs.readFileSync('11729.txt');

const solution = () => {
    const N = +input;
    const result = [];
            
    const hanoiTop = (start, middle, end, num) => {
        if(num === 1) {
            result.push(`${start} ${end}`);
            return;
        } else {
            hanoiTop(start, end, middle, num - 1);
            result.push(`${start} ${end}`);
            hanoiTop(middle, start, end, num - 1);
        }
    }

    
    hanoiTop(1, 2, 3, N);
    result.unshift(result.length);

    console.log(result.join("\n"));
}

solution();