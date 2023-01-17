const isCorrectBracket = (brackets) => {
    const stack = [];
    for(let i = 0; i < brackets.length; i++) {
        if(brackets[i] === '(') stack.push("(")
        else {
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0 ? true : false;
}