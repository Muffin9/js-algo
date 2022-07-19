const fs = require('fs');
const input = fs.readFileSync("5464.txt").toString().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ");
    const space = new Array(100);
    const carPrice = [];
    const orders = [];
    let answer = 0;
    
    for(let i = 0; i < N; i++) {
        space[+input.shift()] = 1;
    }

    for(let i = 0; i < M; i++) {
        carPrice.push(+input.shift());
    }

    while(input.length) {
        orders.push(+input.shift());
    }

    while(orders.length) {
        const order = orders.shift();
        if(order >= 0) {
            for(let i = 0; i < space.length; i++) {
                if(space[i] === 1) {
                    console.log(i);
                    space[i] = 0;
                    answer += carPrice[order - 1] * i;
                    break;
                }
            }
        } else {
            space[order * -1] = 1;
        }
        // console.log(answer);
    }
}

solution();
