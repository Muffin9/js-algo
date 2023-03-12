function solution(files) {
    const answer = [];
    const modifyFiles = [];


    for(let i = 0; i < files.length; i++) {
        const file = files[i];
        // 처음 숫자가 나오는 인덱스를 구해서 slice로 분리하자.
        const numIdx = file.search(/[\d]/);
        let notNumIdx = file.slice(numIdx).search(/[\D]/);
        if(notNumIdx === -1) notNumIdx = file.length;
        const lastIdx = numIdx + notNumIdx;
        const obj = { HEAD: file.slice(0, numIdx), NUMBER: file.slice(numIdx, lastIdx), element: file }
        modifyFiles.push(obj);
    }
    const sortedFiles = Array.from(modifyFiles).sort((a, b) => {
        if(a.HEAD.toUpperCase() === b.HEAD.toUpperCase()) {
            return a.NUMBER - b.NUMBER;
        }
        if(a.HEAD.toUpperCase() < b.HEAD.toUpperCase()) return -1;
    });
    
    for(const file of sortedFiles) {
        answer.push(file.element);
    }
    
    return answer;
}

// solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]);
solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat", "F-15"])