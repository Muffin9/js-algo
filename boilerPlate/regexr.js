// 문자열을 받아 숫자만 이루어진 배열 리턴
function strToNum (str) {
    return str.split(/[^0-9]/).map(Number);
}

// 문자열을 받아 특정 문자만 이루어진 배열 리턴
function strToOper (str) {
    return str.match(/[\+\-\*]/g);
}

console.log(strToNum("100-200*300-500+20"));
console.log(strToOper("100-200*300-500+20"));