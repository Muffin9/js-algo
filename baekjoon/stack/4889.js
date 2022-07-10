const fs = require('fs');
const input = fs.readFileSync("4889.txt").toString().split("\n");

const solution = () => {
    const result = [];
    for(let idx = 0; idx < input.length; idx++) {
        const bracketStr = input[idx].split("");
        if(input[idx][0] === '-') {
            console.log(result.join("\n"));
            return;
        }

        const stack = [];
        let answer = 0;

        for(let i = 0; i < bracketStr.length; i++) {
            if(stack.length === 0 && bracketStr[i] === "}") {
                answer += 1;
                stack.push("{");
            } else if(bracketStr[i] === "}") {
                stack.pop();
            } else if(bracketStr[i] === "{") {
                stack.push("{")
            }
        }

        result.push(`${idx+1}. ${stack.length / 2 + answer}`);
    }
    
}

solution();