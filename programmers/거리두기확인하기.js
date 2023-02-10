// 참고 URL : https://velog.io/@hsk10271/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B1%B0%EB%A6%AC%EB%91%90%EA%B8%B0-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-with-JavaScript

function solution(places) {
    const answer = new Array(places.length);
    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, 1, -1];

    const BFS = (x, y, room) => {
        const queue = [[x, y]];
        while(queue.length > 0) {
            
            for(let i = 0; i < 4; i++) {
                const nextX = x + moveX[i];
                const nextY = y + moveY[i];

                if(nextX < 0 || nextY < 0 || nextX >= 5 || nextY >= 5 || room[nextX][nextY] === 'X') continue;
                if (room[nextX][nextY] === 'P') return false;

                for (let j = 0; j < 4; j++) {
                    // 빈테이블 일 경우 한 번더 확인.
                    let aroundNX = nextX + moveX[j];
                    let aroundNY = nextY + moveY[j];
            
                    if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5 || room[aroundNX][aroundNY] === 'X') continue;
                    if (aroundNX === x && aroundNY === y) continue;
                    if (room[aroundNX][aroundNY] === 'P') return false;
                  }
            }
            return true;
        }
    }

    for(let i = 0; i < places.length; i++) {
        const room = places[i];
        let flag = true;
        for(let j = 0; j < room.length; j++) {
            for(let k = 0; k < room[j].length; k++) {
                if(room[j][k] === "P") {
                    if(!BFS(j, k, room)) flag = false;
                }
            }
            if(!flag) break;
        }

        flag ? answer[i] = 1 : answer[i] = 0;
    }
    
    console.log(answer);
}



solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]);