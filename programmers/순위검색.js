function solution(info, query) {
    const answer = [];
    const records = [];
    const queries = [];

    info.forEach(element => {
        records.push(element.split(" "));
    });

    query.forEach(element => {
        queries.push(element.replace(/and /gi,'').split(' '))
    });

    for(let i = 0; i < queries.length; i++){
        let count = 0;
        for(let j = 0; j < records.length; j++){
            for(let k = 0; k < 4; k++){
                if(queries[i][k] === records[j][k] || queries[i][k] == '-'){
                    if(k === 3 && +queries[i][4] <= +records[j][4]){
                        count += 1;
                    }
                }else{
                    break;
                }
            }
        }
        answer.push(count);
    }
    
    return answer;
}

const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];

solution(info, query);