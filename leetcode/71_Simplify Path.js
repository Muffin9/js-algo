/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    const names = path.split('/');
    const stack = [];

    for(let i = 0; i < names.length; i++) {
        if(names[i] === '..') stack.pop();
        else if(names[i] !== '.' && names[i] !== '') {
            stack.push(names[i]);
        }
    }
    return `/${stack.join('/')}`;
 };


simplifyPath("/a/./b/../../c/");
simplifyPath('/home/');
// simplifyPath('/home//foo/');