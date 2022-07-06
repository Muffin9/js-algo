const fs = require('fs');
const input = fs.readFileSync("4949.txt").toString().split("\n");

const solution = () => {
    const openBracket = ["(", "["];
    const closedBracket = [")", "]"];
    const result = [];
    while(true) {
        const sentence = input.shift();
        if (sentence[0] === ".") {
            console.log(result.join("\n"));
            return;
        }
        const stack = [];
        let checkFlag = true;
        for(let i = 0; i < sentence.length; i++) {
            const str = sentence[i];
            if(openBracket.includes(str)) {
                stack.push(sentence[i]);
            } else if(closedBracket.includes(str)) {
                const stackValue = stack.pop();
                if(openBracket.indexOf(stackValue) !== closedBracket.indexOf(str)) {
                    checkFlag = false;  
                    break;
                }
            }
        }
        
        if(checkFlag && stack.length === 0) {
            result.push("yes");
        } else {
            result.push("no");
        }
    }
}

solution();

