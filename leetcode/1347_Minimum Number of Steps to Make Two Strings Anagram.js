/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        const value = map.get(s[i]);
        if(!value) map.set(s[i], 1);
        else map.set(s[i], value + 1);
    }
    
    for(let i = 0; i < t.length; i++) {
        const value = map.get(t[i]);
        if(value) map.set(t[i], value - 1);
    }
    let diffCount = 0;
    for(const value of map.values()) {
        diffCount += value;
    }

    return diffCount;
};

// minSteps("bab", "aba");
minSteps("leetcode", "practice");