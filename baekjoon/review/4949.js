const fs = require('fs');
const input = fs.readFileSync('4949.txt').toString().trim().split("\n");

const solution = () => {
    const openBracket = ['(', '['];
    const closedBracket = [')', ']'];

    while(true) {
        const sentence = input.shift();
        if(sentence[0] === '.') {
            return;
        }
        const stack = [];
        let checkFlag = true;

        for(let i = 0; i < sentence.length; i++) {
            if(sentence[i] === '(' || sentence[i] === '[') {
                stack.push(sentence[i]);
            } else if(closedBracket.includes(sentence[i])) {
                const stackValue = stack.pop();
                if(openBracket.indexOf(stackValue) !== closedBracket.indexOf(sentence[i])) {
                    checkFlag = false;
                    break;
                }
            } 
        }
        
        if(checkFlag && stack.length === 0) {
            console.log('yes');
        } else {
            console.log('no');
        }
        
    }
}

solution();