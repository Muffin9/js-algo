/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let idx = 0;

    for(let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        while(stack.length !== 0 && stack[stack.length - 1] === popped[idx]) {
            idx += 1;
            stack.pop();
        }
    }
    console.log(stack);
    return stack.length ? true : false;
 };

 validateStackSequences([1,2,3,4,5], [4,5,3,2,1]);