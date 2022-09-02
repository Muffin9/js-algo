// 내풀이
// function solution(survey, choices) {
//     let answer = '';
//     const category = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N:0 };
//     const scores = [3, 2, 1, 0, 1, 2, 3];
    
//     for(let i = 0; i < choices.length; i++) {
//         if(choices[i] === 4) continue;
//         else if(choices[i] < 4) {
//             category[survey[i][0]] += scores[choices[i] - 1];
//         } else if(choices[i] > 4) {
//             category[survey[i][1]] += scores[choices[i] - 1];
//         }
//     }
    
//     answer += category.R >= category.T ? 'R' : 'T';
//     answer += category.C >= category.F ? 'C' : 'F';
//     answer += category.J >= category.M ? 'J' : 'M';
//     answer += category.A >= category.N ? 'A' : 'N';
//     return answer;
// }

// solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
// solution(["TR", "RT", "TR"], [7, 1, 3]);


// 다른 사람 풀이
function solution(survey, choices) {
    let answer = '';
    const mbti = {};
    const types = ["RT", "CF", "JM", "AN"];
    
    types.forEach((type) =>
        type.split('').forEach((char) => mbti[char] = 0)
    )

    for(let i = 0; i < choices.length; i++) {
        mbti[choices[i] < 4 ? survey[i][0] : survey[i][1]] += Math.abs(choices[i] - 4);
    }
    
    console.log(types.map(([a, b]) => mbti[b] > mbti[a] ? b : a).join(""));
    return answer;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
solution(["TR", "RT", "TR"], [7, 1, 3]);