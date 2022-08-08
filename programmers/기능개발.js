// attempts: 2회, time: 10분
function solution(progresses, speeds) {
    const answer = [];
    let time = 0;
    while(progresses.length) {
        for(let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }

        while(progresses[0] >= 100) {
            time += 1;
            progresses.shift();
            speeds.shift();
        }

        if(time) {
            answer.push(time);
            time = 0;
        }

    }
    console.log(answer);
}

solution([93, 30, 55], [1, 30, 5]) // return : [2, 1];
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]) // return : [1, 3, 2];