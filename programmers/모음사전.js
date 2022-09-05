function solution(word) {
    const words = ['A', 'E', 'I', 'O', 'U'];

    const arr = [];
    const dfs = (str, len) => {
        if(len === 5) return;
        arr.push(str);
        if(str === word) {
            return arr.indexOf(str) + 1;
        }
        for(let i = 0; i < words.length; i++) {
            dfs(str + words[i], len + 1);
        }
    }

    for(let i = 0; i < words.length; i++) {
        dfs(words[i], 0);
    }

    return arr.indexOf(str) + 1;
}


solution('AAAAE');