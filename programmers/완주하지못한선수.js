// attempts: 2회, time: 5분

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}

// solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
solution(["leo", "kiki", "eden"], ["eden", "kiki"]);