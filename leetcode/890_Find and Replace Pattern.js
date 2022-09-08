/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const alphaIdx = new Array(pattern.length);
    const result = [];
    for(let i = 0; i < pattern.length; i++) {
        const firstIdx = pattern.indexOf(pattern[i]);
        alphaIdx[i] = firstIdx;
    }

    for(let i = 0; i < words.length; i++) {
        let flag = true;
        for(let j = 0; j < words[i].length; j++) {
            const firstIdx = words[i].indexOf(words[i][j]);
            console.log(firstIdx);
            if(alphaIdx[j] !== firstIdx) {
                flag = false;
                break;
            }
        }
        if(flag) {
            result.push(words[i]);
        }
    }
    console.log(result);
};

findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], 'abb');
findAndReplacePattern(["a","b","c"], "a");