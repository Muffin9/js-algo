/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const init = (args1, args2) => {
    const listNode1 = new ListNode(args1.shift());
    let cur = listNode1;
    while(args1.length) {
        const value = args1.shift();
        cur.next = new ListNode(value);
        cur = cur.next;
    }
    const listNode2 = new ListNode(args2.shift());
    cur = listNode2;
    while(args2.length) {
        const value = args2.shift();
        cur.next = new ListNode(value);
        cur = cur.next;
    }
    return [listNode1, listNode2];
}

const addTwoNumbers = ([l1, l2]) => {
};

addTwoNumbers(init([2, 4, 3], [5, 6, 4]));