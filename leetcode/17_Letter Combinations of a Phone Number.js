/**
 * @param {string} digits
 * @return {string[]}
 */
// 참고 URL :https://javascript.plainenglish.io/backtracking-ii-letter-combinations-of-a-phone-number-af52fc22c6d1
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const numberObj = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const answer = [];
    const possibleValues = digits.split('').map(v => numberObj[v]);
    
    const numCombination = (start, acc) => {
        if(digits.length === acc.length) {
            answer.push(acc.join(""));
            return;
        }

        for(let i = start; i < possibleValues.length; i++) {
            for(let j = 0; j < possibleValues[i].length; j++) {
                acc.push(possibleValues[i][j]);
                numCombination(i + 1, acc);
                acc.pop();
            }
        }
    }

    numCombination(0, []);
    console.log(answer);
};

letterCombinations("23");