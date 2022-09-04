function solution(brown, yellow) {
    const answer = new Array(2).fill(0);
    const area = brown + yellow;
    
    for(let i = 1;  i <= area; i++) {
        let row = i;
        let col = Math.floor(area / row);
        if((row - 2) * (col - 2) === yellow) {
            answer[0] = col;
            answer[1] = row;
            return answer;
        }
    }
}

solution(10 , 2); // [4, 3]