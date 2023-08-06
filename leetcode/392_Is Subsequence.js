/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const stack = s.split("");
  let checkIdx = stack.length;
  t.split("")
    .reverse()
    .forEach((standardStr) => {
      if (standardStr === stack[checkIdx - 1]) {
        checkIdx -= 1;
      }
    });

  return checkIdx === 0;
};

isSubsequence("abc", "ahbgdc"); // true
isSubsequence("aec", "abcdefg"); // false
isSubsequence("aaaaaa", "bbaaaa"); //false
