/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const result = [];
    const lastIndexs = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++) {
        lastIndexs[s[i].charCodeAt(0) - 97] = i;
    }

    

    let max = 0;
    let checkIdx = -1;
    for(let i = 0; i < s.length; i++) {
        const lastIdx = s[i].charCodeAt(0) - 97;
        max = Math.max(max, lastIndexs[lastIdx]);
        if(max === i) {
            result.push(max - checkIdx);
            checkIdx = i;
        }
    }

    console.log(result);
};


// partitionLabels("ababcbacadefegdehijhklij");
partitionLabels("eccbbbbdec");