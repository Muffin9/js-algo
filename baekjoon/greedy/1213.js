const fs = require('fs');
const input = fs.readFileSync('1213.txt').toString().trim();


const isPalindrome = (arr) => {
    let cnt = 0;
    for(let i = 0; i < 26; i++)
        if(Math.floor(arr[i] % 2) === 1) 
            cnt += 1;
    return cnt > 1;
}

const solution = () => {
    const alpha = input;
    const arr = new Array(26).fill(0);
    const palindromeArr = new Array(alpha.length);
    let startIdx = 0;
    let lastIdx = palindromeArr.length -1;

    for(let i = 0; i < alpha.length; i++) {
        arr[alpha.charCodeAt(i) - 65] += 1;
    }

    if(isPalindrome(arr)) {
        console.log("I'm Sorry Hansoo");
        return;
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i]) continue;
        const share = Math.floor(arr[i] / 2);
        for(let j = 0; j < share; j++) {
            palindromeArr[startIdx] = String.fromCharCode(i + 65);
            palindromeArr[lastIdx] = String.fromCharCode(i + 65);
            startIdx += 1;
            lastIdx -= 1;
        }
        const remain = Math.floor(arr[i] % 2);
        arr[i] = remain;
    }

    for(let i = 0; i < arr.length; i++) {
        if(!arr[i]) continue;
        palindromeArr[startIdx] = String.fromCharCode(i + 65);
        startIdx += 1;
    }

    console.log(palindromeArr.join(''));
}

solution();