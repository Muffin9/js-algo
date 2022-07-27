const fs = require('fs');
const input = fs.readFileSync('10816.txt').toString().trim().split('\n');

const solution = () => {
    const N = +input.shift();
    // key(숫자), value(count) 형태로 객체 저장.
    // getCard 길이 만큼 순회하면서 getCard key와 같은 inputCard key 가 있는지 체크
    // 있다면 inputCard의 value 값을 result 배열에 저장.
    // => Map 자료구조로 시간초과를 해결해보자.
    const inputCard = input.shift().split(" ").reduce((prev, cur) => {
        if(Object.keys(prev).includes(cur)) prev[cur] += 1;
        else {
            prev[cur] = 1;
        }
        return cur = prev;
    }, {});

    const M = +input.shift();

    const getCard = input.shift().split(" ").map(v => {
        const obj = {};
        obj[+v] = 0;
        return obj;
    });

    const result = [];

    for(let i = 0; i < M; i++) {
        const key = Object.keys(getCard[i])[0];
        if(inputCard[key]) {
            result.push(inputCard[key]);
        }
        else result.push(0);
    }

    console.log(result.join(" "));
}

solution();