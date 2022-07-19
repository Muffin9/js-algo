const fs = require('fs');
const input = fs.readFileSync('15235.txt').toString().split("\n");

const solution = () => {
    const N = +input.shift();
    const pizza = input.shift().split(" ");
    const queue = [];
    for(let i = 0; i < N; i++) {
        queue.push({ value: +pizza[i] ,idx: i});
    }

    const result = new Array(N).fill(0);
    let count = 0; 
    

    
    while(queue.length) {
        const queueFront = queue.shift();
        
        queueFront.value -= 1;
        count += 1;
        if(queueFront.value === 0) {
            result[queueFront.idx] = count;
        } else {
            queue.push({value: queueFront.value, idx: queueFront.idx})
        }
    }
    console.log(result.join(" "));
}

solution();