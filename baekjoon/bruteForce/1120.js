const fs = require('fs');
const input = fs.readFileSync('1120.txt').toString().trim();

const solution = () => {
    const [v1, v2] = input.split(" ");
    
    let min = v1.length;
    for(let i = 0; i <= v2.length - v1.length; i++) {
        let count = 0;
        for(let j = 0; j < v1.length; j++) {
            if(v1[j] !== v2[j + i]) count += 1;
        }

        min = min >= count ? count : min;
    }

    console.log(min);
}

solution();