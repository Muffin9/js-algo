function solution(s) {
    const newStr = s.replace("{{", "").replace("}}", "").split("},{");
    const set = new Set();

    newStr.sort((a, b) => a.length - b.length);

    for(let i = 0; i < newStr.length; i++) {
        const arr = newStr[i].split(",");
        for(let j = 0; j < arr.length; j++) {
            if(!set.has(arr[j])) set.add(Number(arr[j]));
        }
    }
    console.log([...set]);
}

// solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");
// solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");
// solution("{{20,111},{111}}");
solution("{{4,2,3},{3},{2,3,4,1},{2,3}}");