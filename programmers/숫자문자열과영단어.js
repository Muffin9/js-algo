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

    let re = new RegExp(Object.keys(numsObj).join("|"), "g");
    return +s.replace(re, (match) => numsObj[match]);
};

solution("one4seveneight");