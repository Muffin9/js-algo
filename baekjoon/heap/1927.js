const fs = require('fs');
const [_, ...input] = fs.readFileSync('1927.txt').toString().trim().split("\n");

class MinHeap {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length ? false : true;
    }

    swap(value1, value2) {
        return [this.heap[value1], this.heap[value2]] = [this.heap[value2], this.heap[value1]];
    }

    insert(value) {
        this.heap.push(value);
        let currentIdx = this.heap.length - 1;

        while(currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx) / 2);
            if(this.heap[parentIdx] <= this.heap[currentIdx]) break;
            this.swap(parentIdx, currentIdx);
            currentIdx = parentIdx;
        }
    }

    getMin() {
        if(this.heap.length === 1) {
            return this.heap.pop();
        }
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return minValue;
    }
    
    heapify(idx) {
        const leftIdx = 2 * idx;
        const rightIdx = 2 * idx + 1;
        const len = this.heap.length;
        let smallestIdx = idx;

        if(leftIdx < len && this.heap[leftIdx] < this.heap[smallestIdx]) smallestIdx = leftIdx;

        if(rightIdx < len && this.heap[rightIdx] < this.heap[smallestIdx]) smallestIdx = rightIdx;

        if(smallestIdx !== idx) {
            this.swap(smallestIdx, idx);
            this.heapify(smallestIdx);
        }
    }
}

const solution = () => {
    const minHeap = new MinHeap();
    let answer = '';
    input.forEach((value) => {
        if (+value === 0) {
            if (minHeap.isEmpty()) {
              answer += `0\n`;
            } else {
              answer += `${minHeap.getMin()}\n`;
            }
          } else {
            minHeap.insert(+value);
          }
    })
    console.log(answer);
}

solution();