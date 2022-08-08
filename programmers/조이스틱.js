function solution(name) {
    let answer = 0;
    const arr = new Array(name.length);
    let move = name.length - 1;
    for(let i = 0; i < name.length; i++) {
        answer += Math.min(91 - name[i].charCodeAt(0), name[i].charCodeAt(0) - 65);
        if (i < name.length - 1 && name[i].charCodeAt(i) === 65) {
            const count = i + 1;
            while(count < name.length && name[i].charCodeAt(count) === 65) count += 1;

            move = Math.min(move, i * 2 + (name.length - count));
            move = Math.min(move, i + (name.length - count) * 2);
        }
    }
    console.log(answer, move);
    return answer + move;
}

solution("JAN");