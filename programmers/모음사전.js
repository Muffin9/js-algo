// function solution(word) {
//     const words = ['A', 'E', 'I', 'O', 'U'];

//     const arr = [];
//     const dfs = (str, len) => {
//         if(len === 5) return;
//         arr.push(str);
//         if(str === word) {
//             return arr.indexOf(str) + 1;
//         }
//         for(let i = 0; i < words.length; i++) {
//             dfs(str + words[i], len + 1);
//         }
//     }

//     for(let i = 0; i < words.length; i++) {
//         dfs(words[i], 0);
//     }

//     return arr.indexOf(word) + 1;
// }


function solution(word) {
    const wordOfRate = [781, 156, 31, 6, 1];
    const words = ["A", 'E', 'I', 'O', 'U'];
    let answer = word.length;

    for(let i = 0; i <  word.length; i++) {
        console.log(wordOfRate[i], words.indexOf(word[i]));
        answer += wordOfRate[i] * words.indexOf(word[i]);
    }
    console.log(answer);
}

solution('AAAAE');
solution('I')