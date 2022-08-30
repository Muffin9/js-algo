const fs = require('fs');
const input = fs.readFileSync('15903.txt').toString().trim().split('\n');


const solution = () => {
    const [n, m] = input.shift().split(" ").map(v => +v);
    const cards = input.shift().split(' ').map(Number);
    cards.sort((a, b) => a - b);
  
    for(let i = 0; i < m; i++) {
      const mixCard = cards[0] + cards[1];
      
      for(let j = 0; j < 2; j++) {
        cards.shift();
        cards.push(mixCard);
      }
      cards.sort((a, b) => a - b);
    }
  
    const sum = cards.reduce((acc, cur) => acc += cur);
  
    console.log(sum);
}

solution();