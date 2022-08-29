
// attempts: 2회, time: 22분
function solution(n, arr1, arr2) {
    const Decryption = (num) => {
        // 2진수 리턴.
        let stack = new Array(n).fill(0);
        let idx = 0;
        while(num > 0) {
            stack[idx] = (Math.floor(num % 2));
            num = Math.floor(num / 2);
            idx += 1;
        }

        return stack.reverse();
    }

    const map1 = [];
    const map2 = [];
    const resultMap = Array.from(new Array(n), () => []);
    const result = [];

    for(let i = 0; i < n; i++) {
        map1.push(Decryption(arr1[i]));
        map2.push(Decryption(arr2[i]));
    }

    for(let i = 0; i < map1.length; i++) {
        for(let j = 0; j < map2.length; j++) {
            if(map1[i][j] === 1 || map2[i][j] === 1) resultMap[i][j] = '#';
            else resultMap[i][j] = ' ';
        }
    }

    for(let i = 0; i < resultMap.length; i++) {
        result.push(resultMap[i].join(""));
    }
    console.log(result);
}

// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
solution(6, [46, 33, 33 ,22, 31, 50], 	[27 ,56, 19, 14, 14, 10]);