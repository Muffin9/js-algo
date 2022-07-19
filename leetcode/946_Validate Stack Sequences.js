var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let idx = 0;
    for(let i = 0; i < popped.length; i++) {
        stack.push(pushed[i]);
        while(stack.length !== 0 && stack[stack.length - 1] === popped[idx]) {
            idx += 1;
            stack.pop();
        }
    }
    return stack.length === 0 ? true: false;
};

const pushed = [1,2,3,4,5];
const popped = [4,3,5,2,1];
validateStackSequences(pushed, popped);