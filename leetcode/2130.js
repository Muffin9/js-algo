// Maximum Twin Sum of a Linked List

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const createNode = function() {
    const head = new ListNode(5, 4);
    head.next = new ListNode(4, 2);
    head.next = new ListNode(1);

    return head;
}

const pairSum = function(head) {
    const stack = [];
    let cur = head;
    let maxNum = 0;
    while(cur) {
        stack.push(cur.val);
        cur = cur.next;
    }
    
    while(stack.length) {
        const value = stack.shift() + stack.pop();
        maxNum = Math.max(maxNum, value);
    }
    
    return maxNum;
};

console.log(pairSum(createNode()));