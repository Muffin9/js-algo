// 완전탐색 문제 ?
function solution(want, number, discount) {
    let answer = 0;
    const map = new Map();
    const discountLen = discount.length;

    for(let i = 0; i < want.length; i++) {
        map.set(want[i], number[i]);
    }

    const checkitems = (items) => {
        for(const [item, value] of items) {
            if(value > 0) return false;
        }

        return true;
    }
    
    for(let i = 0; i <= discountLen - 10; i++) {
        let day = 0;
        const items = new Map(map);
        const sliceArr = discount.slice(i, i + 11);
        for(let j = 0; j <= 10; j++) {
            if(day === 10) {
                if(checkitems(items)) answer += 1;
            }
            day += 1;
            items.set(sliceArr[j], items.get(sliceArr[j]) - 1);
        }
    }

    return answer;
}

    const want = ["banana", "apple", "rice", "pork", "pot"];
    const number = [3, 2, 2, 2, 1];
    const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];

    solution(want, number, discount);