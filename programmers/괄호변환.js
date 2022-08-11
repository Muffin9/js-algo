// 테스트케이스 12 ~ 23 => 실패
// https://school.programmers.co.kr/questions/20512
// 해결. 거의 2시간걸림,,,
function isCorrectBracket (brackets) {
    const stack = [];
    for(let i = 0; i < brackets.length; i++) {
        if (brackets[i] === '(') stack.push('(')
        else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return true;
}

function solution(p) {
    let resultStr = '';
    const recur = (p) => {
        if(!p) return '';

        let leftBracket = 0;
        let rightBracket = 0;

        for(let i = 0; i < p.length; i++) {
            if(p[i] === "(") leftBracket += 1;
            else if(p[i] === ")") rightBracket += 1;

            if(leftBracket === rightBracket) {
                // 앞의 u
                if(isCorrectBracket(p.slice(0, i + 1))) {
                    // 올바른 괄호 문자열이므로 다시 재귀 => 올바른 u는 이후에 리턴할 resultStr에 다시 붙임 u + resultStr
                    // 다시 재귀를 돌릴 문자열은 균형잡힌 문자열(u)가 아닌 뒤의 v
                    const u = p.slice(0, i + 1);
                    const v = p.slice(i + 1);
                    recur(v);
                    return resultStr = u + resultStr;
                } else {
                    // 올바른 괄호 문자열이 아니라면? 문제에서 주어진 4번 과정을 수행하자.
                    const u = p.slice(0, i + 1);
                    const newP = u.substring(1, u.length - 1);
                    const newStr = [];

                    // 문자자체를 뒤집는게 아닌 괄호를 뒤집는거였음.
                    for(let j = 0; j < newP.length; j++) {
                        if(newP[j] === '(') newStr.push(')');
                        else if(newP[j] === ')') newStr.push('(');
                    }
                    return resultStr = `(${recur(p.slice(i + 1))})` + newStr.join("");
                }
            }
        }
    }
    recur(p);
    console.log(resultStr);
}

// solution("(()())()");
solution("()))((()");