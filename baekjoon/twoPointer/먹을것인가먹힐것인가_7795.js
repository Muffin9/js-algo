let [T, ...input] = require('fs').readFileSync('먹을것인가먹힐것인가_7795.txt').toString().trim().split("\n");

const solution = () => {
    
    while(+T--) {
        const [N, M] = input.shift().split(" ").map(Number);
        const arrA = input.shift().split(" ").map(Number).sort((a, b) => a - b);
        const arrB = input.shift().split(" ").map(Number).sort((a, b) => a - b);
        let count = 0;
        for(let i = 0; i < arrA.length; i++) {
            for(let j = 0; j < arrB.length; j++) {
                if(arrA[i] > arrB[j]) count += 1;
            }
        }
        console.log(count);
    }

}

solution();
