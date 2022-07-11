const fs = require('fs');
const input = fs.readFileSync("17413.txt").toString().trim();

const solution = () => {
    let bracketFlag = false;
    const wordArr = [...input];
    let stack = [];
    let answer = [];

    for(let i = 0; i < wordArr.length; i++) {
        if(wordArr[i] === '<') {
             if(stack.length > 0){
                answer = answer.concat(stack)
                stack = [];
            }
            answer.push('<');
            bracketFlag = true;
        } else if(wordArr[i] === '>') {
            answer.push('>')
            bracketFlag = false;
        } else if(bracketFlag) {
            answer.push(wordArr[i]);
        } else if(!bracketFlag){
            if(wordArr[i] === " ") {
                stack.push(' ')
                answer = answer.concat(stack);
                stack = [];
            } else {
                stack.unshift(wordArr[i]);
            }
        }
    }

    if(!bracketFlag){
        answer = answer.concat(stack)
    }
    console.log(answer.join(""));
}


solution();