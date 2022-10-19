/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
    const stack = [];
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ')') {
            if(stack.length !== 0) stack.pop();
            else count += 1;
        } else if(s[i] === '(') stack.push(s[i]);
    }
    
    return stack.length + count; 
};