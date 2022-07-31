const fs = require('fs');
const input = fs.readFileSync('10825.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const people = input.splice(0, N).map(v => {
        const [name, kr, en, math] = v.split(" ")
        const obj = {};
        obj.name = name;
        obj.kr = +kr;
        obj.en = +en;
        obj.math = +math;
        return obj;
    });
    

    people.sort((a, b) => {
        if(a.kr === b.kr) {
            if(a.en === b.en) {
                if(a.math === b.math) {
                    return a.name < b.name;
                }
                return a.math > b.math;
            }
            return a.en < b.en;
        }
        return a.kr > b.kr;
    });

    console.log(people);
    let answer = '';

    for(const person of people) {
        answer += `${person.name}\n`;
    }

    console.log(answer);
}

solution();