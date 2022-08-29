// attempts: 2, time: 2분
function solutiosn(s) {
    const len = s.length;
    return len % 2 === 0 ? s.substr(Math.floor(len / 2) - 1, 2) : s[Math.floor(len / 2)];
}

console.log(solution("qwer"));