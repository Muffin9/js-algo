// attempts: 1회, time: 30분
function solution(clothes) {
    const map = new Map();
    let answer = 1;
    for(let i = 0; i < clothes.length; i++) {
        const costumeKey = clothes[i][1];
        const coustmeValue = clothes[i][0];
        if(map.has(costumeKey)) map.set(costumeKey, [...map.get(costumeKey), coustmeValue]);
        else map.set(costumeKey, [coustmeValue]);
    }

    const arr = [];

    for (let [key, value] of map.entries()) {
        arr.push(value);
    }

    console.log(map);

    arr.forEach((v) => {
        answer *= v.length + 1;
    });

    return answer - 1;
}

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
// const clothes = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];
solution(clothes);