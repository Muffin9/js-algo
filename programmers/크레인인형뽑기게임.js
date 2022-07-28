function solution(board, moves) {
    const basket = [];
    let result = 0;
    for(let i = 0; i < moves.length; i++) {
        const pick = moves[i] - 1;

        for(let j = 0; j < board[pick].length; j++) {
            if(board[j][pick] !== 0) {
                basket.push(board[j][pick]);
                board[j][pick] = 0;
                break;
            }
        }

        if(basket.length >= 2) {
            const doll1 = basket.pop();
            const doll2 = basket.pop();

            if(doll1 === doll2) result += 2;
            else {
                basket.push(doll2);
                basket.push(doll1);
            }
        }
    }
    console.log(result);

}

const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

solution(board, moves);