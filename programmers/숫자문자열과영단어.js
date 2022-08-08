// oneone345 로 들어올때도 고려해서 코드 작성을 했어야했다. 2번째 풀어봄, 20분 소요.
const solution = (s) => {
    const numsObj = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };

    let answer = s;

    
    for(const [key, value] of Object.entries(numsObj)) {
        const pattern = new RegExp(key, "g");
        answer = answer.replace(pattern, value);
    }
    
    return parseInt(answer);
};

solution("oneoneone345");