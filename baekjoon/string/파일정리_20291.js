const [N, ...files] = require('fs').readFileSync('20291.txt').toString().trim().split("\n");

const solution = () => {
    const fileMap = new Map();
    for(let i = 0; i < +N; i++) {
        const [_, extension] = files[i].split(".");
        const values = fileMap.get(extension);
        if(!values) {
            fileMap.set(extension, 1);
        } else {
            fileMap.set(extension, values + 1);
        }
    }

    const sortedMap = new Map([...fileMap].sort());
    let answer = '';
    for(const [key, value] of sortedMap) {
        answer += `${key} ${value}\n`;
    }
    console.log(answer);
}

solution();