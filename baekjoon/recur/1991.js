const fs = require('fs');
const input = fs.readFileSync('1991.txt').toString().trim().split('\n');

const solution = () => {
    const N = +input.shift();
    const treeObj = {};
    for (let i = 0; i < N; i++) {
        const [node, left, right] = input[i].split(" ");
        treeObj[node] = [left, right];  
    }
    let result = '';
    const resultArr = [];

    const preOrder = (node) => {
        if (node === ".") return;
        const [lt, rt] = treeObj[node];
        result += node;
        preOrder(lt);
        preOrder(rt);
    }

    const inOrder = (node) => {
        if (node === ".") return;
        const [lt, rt] = treeObj[node];
        inOrder(lt);
        result += node;
        inOrder(rt);
    }

    const postOrder = (node) => {
        if (node === ".") return;
        const [lt, rt] = treeObj[node];
        postOrder(lt);
        postOrder(rt);
        result += node;
    }

    preOrder('A');
    resultArr.push(result);
    result = '';
    inOrder("A");
    resultArr.push(result);
    result = '';
    postOrder("A");
    resultArr.push(result);
    console.log(resultArr.join('\n'));
}

solution();