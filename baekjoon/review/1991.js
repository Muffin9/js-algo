const fs = require('fs');
const input = fs.readFileSync('1991.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const treeMap = new Map();
    for(let i = 0; i < N; i++) {
        const [node, left, right] = input.shift().split(" ");
        treeMap.set(node, {left, right});
    }
    
    const preOrder = (node) => {
        if(node === '.') return;
        const {left, right} = treeMap.get(node);
        result += node;
        preOrder(left);
        preOrder(right);
    }

    const inOrder = (node) => {
        if(node === '.') return;
        const {left, right} = treeMap.get(node);
        inOrder(left);
        result += node;
        inOrder(right);
    }

    const postOrder = (node) => {
        if(node === '.') return;
        const {left, right} = treeMap.get(node);
        postOrder(left);
        postOrder(right);
        result += node;
    }

    let result = '';
    preOrder('A');
    console.log(result);
    result = '';
    inOrder('A');
    console.log(result);
    result = '';
    postOrder('A');
    console.log(result);
}

solution();