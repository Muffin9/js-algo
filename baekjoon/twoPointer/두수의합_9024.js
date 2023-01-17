let [T, ...input] = require('fs').readFileSync('9024.txt').toString().trim().split("\n");

const solution = () => {
    while(T > 0) {
        const [S, K] = input.shift().split(" ").map(Number);
        const arr = input.shift().split(" ").map(Number).sort((a, b) => a - b);
        T -= 1;
        let left = 0;
        let right = S - 1;
        // minValue 변수로 K와 차이가 더 작은 left + right 값이 나오면 minValue를 갱신함과 동시에 1부터 다시 세어주자.
        let minValue = Number.MAX_SAFE_INTEGER;
        let answer = 0;
        
        while(left < right) {
            const sum = arr[left] + arr[right];
			if(K === sum) { 
                left += 1; right -= 1;
            }
			else if(sum > K) right -= 1;
			else left += 1;
			
			if(Math.abs(sum - K) < Math.abs(minValue - K)){
				minValue = sum;
				answer = 1;
			}
			else if(Math.abs(sum - K) === Math.abs(minValue - K)) answer += 1;
        }

        console.log(answer);
    }
}

solution();