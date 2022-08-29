const fs = require('fs');
const input = fs.readFileSync('1065.txt').toString().trim();

const solution = () => {
    const N  = +input;
    let count = 0;

    //  한수 조건 : 백의자리수 - 십의자리수 == 십의자리수 - 일의자리수 일 경우
    for(let i = 1; i < N + 1; i++) {
        if(i < 100) count += 1;
        else {
            if(i.toString()[0] - i.toString()[1] === i.toString()[1] - i.toString()[2]) count += 1;
        }
    }
    console.log(count);
}

solution();