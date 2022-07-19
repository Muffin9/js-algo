// Letter Combinations of a Phone Number
// 백트래킹으로 다시 풀어보자.

var letterCombinations = function(digits) {
    if(digits.length === 0) return result;
    
    const phoneNumberObj = { "2": "abc", "3": "def", "4":"ghi", "5":"jkl", "6":"mno", "7":"pqrs", "8":"tuv", "9":"wxyz"}; 
    const digitList = digits.split('');

    let totalLen = 1;
    for(let i = 0; i < digits.length; i++){
        totalLen *= phoneNumberObj[digits[i]].length;
    }

    let count = 1;
    const result = new Array(totalLen).fill('');
    
    while(digitList.length){
        let str = phoneNumberObj[digitList.pop()];
        for (let i = 0; i < totalLen; i++){
            let idx = parseInt(i / count) % str.length;
            result[i] = str[idx] + result[i];
        }
        count *= str.length;
    }
    return result;
};

console.log(letterCombinations("23"));