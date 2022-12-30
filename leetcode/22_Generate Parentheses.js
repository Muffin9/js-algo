/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];

    const bracketCombination = (acc, open, closed) => {
        if(open === n && closed === n) {
            answer.push(acc.join(""));
            return;
        }

        if(open < n) {
            acc.push("(");
            bracketCombination(acc, open + 1, closed);
            acc.pop();
        }

        if(closed < open) {
            acc.push(")")
            bracketCombination(acc, open, closed + 1);
            acc.pop();
        }
    }

    bracketCombination([], 0, 0);
    return answer;
};

generateParenthesis(3);