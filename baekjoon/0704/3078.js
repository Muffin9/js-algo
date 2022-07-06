// const fs = require('fs');
// const input = fs.readFileSync("3078.txt").toString().split("\n");

// const solution = () => {
//     const [N, K] = input.shift().split(" ").map(v => +v);
//     let count = 1;
//     let result = 0;
//     const wordsArr = [...input].map((word) => {
//         const obj = {};
//         obj.grade = count;
//         obj.len = word.length;
//         count += 1;
//         return obj;
//     });
    
//     for(let i = 0; i < N; i++) {
//         const standard = wordsArr[i];
//         for(let j = i + 1; j < N; j++) {
//             if(standard.len !== wordsArr[j].len) continue;

//             if(standard.grade + K >= wordsArr[j].grade) result += 1;
//         }
//     }

//     console.log(result);
// }

// solution();

const fs = require('fs');
const input = fs.readFileSync("3078.txt").toString().trim().split("\n");

const solution = () => {
    const [N, K] = input.shift().split(" ").map(v => +v);
    const students = [...input];
    const queue = Array.from(new Array(21), () => new Array());
    let result = 0;

    for (let i = 0; i < N; i++)
    {
        const nameLength = students[i].length;
		while (queue[nameLength].length !== 0 && i - queue[nameLength][0] > K) {
			queue[nameLength].shift();
		}
        
		result += queue[nameLength].length;
		queue[nameLength].push(i);
    }

    console.log(result);
}

solution();