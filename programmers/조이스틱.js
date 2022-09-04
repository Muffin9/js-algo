function solution(name) {
    let answer = 0;

    // 제일 짧은 좌, 우 이동은 그냥 맨 오른쪽으로 이동할 때
    const len = name.length;
    let move = len - 1;

    for(let i = 0; i < len; i++) {
        answer += Math.min(91 - name[i].charCodeAt(0), name[i].charCodeAt(0) - 65);
        let nextIdx = i + 1;

        while (nextIdx < len && name[nextIdx].charCodeAt(0) === 65) nextIdx++;
        move = Math.min(move, i + len - nextIdx + Math.min(i, len - nextIdx));
    }

    console.log(answer, move);
    return answer + move;
}

solution("ZHEAAAAAABC");