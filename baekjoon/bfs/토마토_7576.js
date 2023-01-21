const [input, ...arr] = require('fs').readFileSync('7576.txt').toString().trim().split("\n");

class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }


const solution = () => {
    const [M, N] = input.split(" ").map(Number);
    const graph = new Queue();
    const tomatoList = new Queue();
    const zeroList = new Queue();
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    let day = 0;

    for(let i = 0; i < N; i++) {
        graph[i] = arr[i].split(" ").map(Number);
    }


    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(graph[i][j] === 1) tomatoList.enqueue([i, j]);
            if(graph[i][j] === 0) zeroList.enqueue([i, j]);
        }
    }
    
    if(zeroList.length === 0) {
        console.log(0);
        return;
    }

    const BFS = () => {
        while(tomatoList.length) {
            let prevTomatoCnt = tomatoList.length;
            let checkDate = false;
            for(let i = 0; i < prevTomatoCnt; i++) {
                const [col, row] = tomatoList.dequeue();
                for(let j = 0; j < 4; j++) {
                    const ny = col + dy[j];
                    const nx = row + dx[j];
        
                    if(nx < 0 || ny < 0 || nx >= M || ny >= N || graph[ny][nx] === -1) continue;
                    if(graph[ny][nx] === 0) {
                        checkDate = true;
                        graph[ny][nx] = 1;
                        tomatoList.enqueue([ny, nx]);
                    }
                }
            }
            if (!checkDate) break; 
            day += 1;
        }
    }

    BFS();
    for (let i = 0; i < N; i++) {
        if (graph[i].includes(0)) {
            console.log(-1);
            return;
        }
    }
    console.log(day);
}

solution();