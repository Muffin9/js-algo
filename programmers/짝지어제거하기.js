// attempts: 2회, time: 25분, 시간초과 문제 발생.
// 맨 앞 원소와 맨 뒤 원소와 일치하다면 pop, shift 해주고, 일치하지 않으면 앞의 원소를 뒤에 옮기는 방식으로 풀었었다.
// 기존에는 원본 s 문자열자체를 따로 배열형태로 담아서 pop, shift 연산을 해주어서 시간초과가 발생했음.
// 구글링을 통해 애초에 빈배열로 뒤 요소 2개만 보고 pop해주는 형식으로 풀이방식이 존재하였다.
function solution(s){
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if(stack[stack.length - 1] === stack[stack.length -2]) {
            stack.pop();
            stack.pop();
        } 
    }

    return stack.length ? 0 : 1;
}

solution("baabaa");
solution("cdcd");