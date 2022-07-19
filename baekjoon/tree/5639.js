const fs = require('fs');
const input = fs.readFileSync('5639.txt').toString().trim().split("\n");

class BTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if(value < this.value) {
            if(this.left === null) {
                this.left = new BTree(value);
            } else {
                this.left.insert(value);
            }
        } else if(value > this.value) {
            if(this.right === null) {
                this.right = new BTree(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    postOrder(node) {
        if(!node) return;
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);
    }
}

const solution = () => {
    const nodes = [...input.map(v => +v)];
    const tree = new BTree(nodes.shift());
    for(let i = 0; i < nodes.length; i++) {
        tree.insert(nodes[i]);
    }
    
    tree.postOrder(tree);
}

solution();