const fs = require('fs');
const input = fs.readFileSync('1181.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input;

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    const set = new Set(arr);
    for(const s of set) {
        console.log(s);
    }
}
// const solution = () => {
//     const N = +input.shift();
//     const arr = input;
    
//     arr.sort();

//     arr.sort((a, b) => {
//         if(a.length < b.length) return a.length - b.length;
//     });

//     const set = new Set(arr);
//     for(const s of set) {
//         console.log(s);
//     }
// }

solution();