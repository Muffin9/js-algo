const fs = require('fs');
const input = fs.readFileSync('1927.txt').toString().split("\n");

class MinHeap {
    constructor(props) {
       this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    delete() {
        const data = this.heap[0];

        if(this.heap.length > 1) {
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        } else {
            this.heap.pop();
        }

        return data;
    }

    heapifyUp() {
        let currentIndex = this.heap.length -1;
        const currentData = this.heap[currentIndex];

        while(currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            const parentData = this.heap[parentIndex];

            if(currentData >= parentData) break;

            this.heap[currentIndex] = parentData;
            currentIndex = parentIndex;
        }

        this.heap[currentIndex] = currentData;
    }

    heapifyDown() {
        let currentIndex = 0;
        const currentData = this.heap[currentIndex];

        while(currentIndex < this.heap.length) {
            const leftChildIndex = currentIndex * 2 + 1;
            const rightChildIndex = currentIndex * 2 + 2;

            if(leftChildIndex >= this.heap.length) break;

            const leftChidData = this.heap[leftChildIndex];
            const rightChildData = rightChildIndex < this.heap.length ? this.heap[rightChildIndex] : null;

            const smallerIndex = rightChildData !== null && rightChildData < leftChidData ? rightChildIndex : leftChildIndex;

            const smallerData = this.heap[smallerIndex];

            if(currentData < smallerData) break;

            this.heap[currentIndex] = smallerData;
            currentIndex = smallerIndex;
        }

        this.heap[currentIndex] = currentData;
    }
    
}

const solution = () => {
    const N = +input.shift();
    const minHeap = new MinHeap();
    const heap = [];

    for(let i = 0; i < N; i++) {
        const value = +input.shift();
        if(value > 0) {
            minHeap.insert(value);
        } else if(minHeap.isEmpty()){
            heap.push(0);
        } else {
            heap.push(minHeap.delete());
        }
    }
    console.log(heap.join("\n"));
}

solution();