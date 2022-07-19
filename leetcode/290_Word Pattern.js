/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    const sArr = s.split(" ");
	const map = new Map();

	if(pattern.length !== sArr.length) return false;

	for(let i = 0; i < sArr.length; i++) {
		const c = pattern[i];
		if(map.has(c)) {
			if(sArr[i] !== map.get(c)) return false;
		} else {
			if([...map.values()].includes(sArr[i])) {
				return false;
			}
			map.set(c, sArr[i]);
		}
	}


	return true;
};

console.log(wordPattern("abba", "dog dog dog dog"));
