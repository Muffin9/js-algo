// function solution(topping) {
//     let idx = 0;
//     let answer = 0;
    
//     const brother = [...topping]; //
//     const set2 = new Set();

//     while(idx !== topping.length) {
//         const standard = topping[idx];
//         brother.shift();
//         set2.add(standard);

//         if(new Set(brother).size === set2.size) answer += 1;
//         idx += 1;
//     }

//     console.log(answer);
// }

function solution(topping) {
    let answer = 0;
    let set1 = new Set();
    let set2 = new Set();
    const counter = new Array(10001).fill(0);

    if(topping.length===1){
        return answer;
    }

    topping.map(top => {
        set1.add(top);
        counter[top]++;
    })

    topping.map(top => {
        if(counter[top] >= 1){
            counter[top]--;
        }
        if(counter[top] === 0){
            set1.delete(top);
        }
        set2.add(top);

        if(set1.size === set2.size){
            answer += 1;
        }
    });
    
    console.log(answer);
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);