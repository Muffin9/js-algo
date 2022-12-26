function solution(data, col, row_begin, row_end) {
    
    data.sort((a, b) => {
        if (a[col-1] - b[col-1] < 0) return -1;
        if (a[col-1] - b[col-1] > 0) return 1;
        return b[0] - a[0];
    });
    
    let answer = 0;
    for (let i = row_begin; i <= row_end; i++) answer ^= data[i - 1].reduce((acc, cur) => acc + (cur % i), 0);

    return answer;
}


solution([[2,2,6],[1,5,10],[4,2,9],[3,8,3]], 2, 2, 3);
