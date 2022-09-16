/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const words = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    const dfs = (word, idx) => {
        if(word.length === n) {
            count += 1;
            return;
        }

        for(let i = idx; i < 5; i++) {
            dfs(word + words[i], i);
        }
    }

    dfs("", 0);
    console.log(count);
};

countVowelStrings(4);