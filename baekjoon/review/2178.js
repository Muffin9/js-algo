const fs = require('fs');
const input = fs.readFileSync("2178.txt").toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const map = new Array(N);
    const visited = new Array(N);

    const labyrinthSearch = (xPos, yPos) => 
    }

    for(let i = 0; i < N; i++) {
        map[i] = input[i].split("").map(v => +v);
        visited[i] = new Array(M).fill(0);
    }

    labyrinthSearch(0, 0);
    console.log(visited[N-1][M-1]);
}

solution();