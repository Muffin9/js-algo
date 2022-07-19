function solution(progresses, speeds) {
    const answer = [];
    let count = 0;

    while(progresses.length) {
        while(progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count += 1;
        }

        if(count > 0) {
            answer.push(count);
            count = 0;
        }

        for(let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
    }

    return answer;
}

solution([93, 30, 55], [1, 30, 5]) // return : [2, 1];
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]) // return : [1, 3, 2];