/**
 * @param {string} s
 * @return {number}
 */
 var minSwaps = function(s) {
    // 우선 올바른 괄호쌍 제거 하자.
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(stack.length !== 0 && s[i] === ']') stack.pop();
        else if(s[i] === '[') stack.push('[');
    }
    
    if(stack.length === 0) return 0;
    else if(stack.length === 1) return 1;
    return Math.ceil(stack.length / 2);
};