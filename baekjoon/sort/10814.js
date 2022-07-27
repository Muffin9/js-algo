const fs = require('fs');
const input = fs.readFileSync('10814.txt').toString().trim().split('\n');

const solution = () => {
    const N = +input.shift();
    const people = new Array(N);

    for(let i = 0; i < N; i++) {
        const [age, name] = input.shift().split(" ");
        const obj = {};
        obj.age = +age;
        obj.name = name;
        people[i] = obj;
    }

    people.sort((a, b) => {
        if(a.age === b.age) {
            return a.name - b.name;
        }
        return a.age - b.age;
    });

    const result = [];
    for(const person of people) {
        result.push(`${person.age} ${person.name}`);
    }

    console.log(result.join("\n"));
}

solution();