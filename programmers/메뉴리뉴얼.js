// attempts: 1, time: 20분, 실패.
// combinations 함수 내에서 재귀를 돈후 base case에서, str를 정렬을 안해주면 정상적인 답을 못얻어낸다.
function combinations(menu, order, count, idx, arr) {
    if(count === arr.length) {
        console.log(arr);
        const str = arr.join("");
        if(menu.has(str)) menu.set(str, menu.get(str) + 1);
        else menu.set(str, 1);
    }

    for(let i = idx; i < order.length; i++) {
        combinations(menu, order, count, i + 1, [...arr, order[i]]);
    }
}

function solution(orders, course) {
    let menu = new Map();
    orders.forEach((order) => course.forEach(count=>{
        combinations(menu, order, count, 0, []);
    }));

    menu = Array.from(menu).filter(v => v[1] >= 2);
    const result = [];

    for(let i = 0; i < course.length; i++) {
        let max = 0;
        const temp = [];
        for(let j = 0; j < menu.length; j++) {
            if(menu[j][0].length === course[i]) {
                max = Math.max(max, menu[j][1]);
                temp.push(menu[j]);
            }
        }
        temp.filter((value => value[1] === max)).forEach(parsingValue => result.push(parsingValue[0]));
    }

    return result.sort();
}

// solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]);
solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);