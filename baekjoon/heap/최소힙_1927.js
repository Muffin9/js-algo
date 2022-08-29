const fs = require('fs');
const [_, ...input] = fs.readFileSync('최소힙_1927.txt').toString().trim().split("\n");
const nums = input.map(v => +v);

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    empty() {
        return this.heap.length;
    }
  
  
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
  
    bubbleUp() {    
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[parentIndex] <= this.heap[currentIndex]) break;
        [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
        currentIndex = parentIndex;
      }
    }
  
  
    extractMin() {
      if (this.heap.length == 1) {
        return this.heap.pop();
      }
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.sinkDown(0);
      return min
    }
  
    sinkDown(index) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      const length = this.heap.length;
      let smallestIndex = index;
  
      if (leftIndex < length && this.heap[leftIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftIndex;
      }
      if (rightIndex < length && this.heap[rightIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex !== index) {
        [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
        this.sinkDown(smallestIndex)
      }
    }
  }

const solution = () => {
    const heap = new MinHeap();
    let answer = "";
    nums.forEach((value) => {
        if (value === 0) {
            if (heap.empty()) {
              answer += `0\n`;
            } else {
              answer += `${heap.extractMin()}\n`;
            }
          } else {
            heap.insert(value);
          }
    })
    console.log(answer);
}

solution();