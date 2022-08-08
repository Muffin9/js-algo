// 2번째 풀어보는 문제. 쉽게 해결함 10분소요
function solution(board, moves) {
    const basket = [];
    let dolls = 0;
    moves.forEach((num) => {
        for(let i = 0; i < board.length; i++) {
            let standard = 0;
            if(board[i][num - 1]) {
                standard = board[i][num-1];
                board[i][num - 1] = 0;
            }

            if(standard) {
                if(basket[basket.length - 1] === standard) {
                    basket.pop();
                    dolls += 2;
                }
                else basket.push(standard);
                break;
            }
        }
    });
    return dolls;
}

const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

solution(board, moves);