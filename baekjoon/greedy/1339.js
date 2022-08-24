const fs = require('fs');
const input = fs.readFileSync('1339.txt').toString().trim().split("\n");

/*
    value를 처음에 9로 셋팅하며 -1씩 차감하도록
    Map 으로 알파벳 셋팅
    입력받은 값들 객체로 len, value 제어
    객체들 len이 모두 0이될때까지 반복문을 계속 순회하며 len이 가장큰 객체의 value(알파벳) 값 셋팅
*/
const solution = () => {
    const N = +input.shift();
    let alphaValue = 9;
    const map = new Map();
    const arr = new Array(N);
    for(let i = 0; i < N; i++) {
        const words = input.shift();
        const obj = {};
        obj.len = words.length;
        obj.value = words;
        arr[i] = obj;
    }
    
    const lenCheck = (arr) => {
        return arr.some(obj => obj.len !== 0);
    }

    while(true) {
        if(!lenCheck(arr)) {
            // 알파벳별로 값 체킹
            let sum = 0;
            let nums = '';
            for(let i = 0; i < arr.length; i++) {
                for(let j = 0; j < arr[i].value.length; j++) {
                    nums += map.get(arr[i].value[j]);
                }
                sum += +nums;
                nums = '';
            }
            console.log(sum);
            return;
        }
        // len이 가장 긴 객체 뽑기
        let maxValue = arr[0];
        for(let i = 1; i < arr.length; i++) {
            if(maxValue.len < arr[i].len) maxValue = arr[i];
        }
        const alpha = maxValue.value[maxValue.value.length - maxValue.len];
        maxValue.len -= 1;
 
        if(!map.get(alpha)) {
            map.set(alpha, alphaValue);
            alphaValue -=1;
        }
    }

}

solution();