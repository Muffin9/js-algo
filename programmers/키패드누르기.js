// 3번째 풀어본 문제라 비교적 쉽게 풀었다. 5분 소요.
const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

const solution = (numbers, hand) => {
    let leftPosition = "*";
    let rightPosition = "#";
    let keyPressed = "";
  
    const keypadObj = {
      1: { col: 1, row: 1 },
      2: { col: 2, row: 1 },
      3: { col: 3, row: 1 },
      4: { col: 1, row: 2 },
      5: { col: 2, row: 2 },
      6: { col: 3, row: 2 },
      7: { col: 1, row: 3 },
      8: { col: 2, row: 3 },
      9: { col: 3, row: 3 },
      0: { col: 2, row: 4 },
      "*": { col: 1, row: 4 },
      "#": { col: 3, row: 4 },
    };

    numbers.forEach((num) => {
        switch(num) {
            case 1: case 4: case 7:
                leftPosition = num;
                keyPressed += 'L';
                break;
            case 3: case 6: case 9:
                rightPosition = num;
                keyPressed += 'R';
                break;
            case 2: case 5: case 8: case 0:
                const leftDistnace = Math.abs(keypadObj[leftPosition].col - keypadObj[num].col) + Math.abs(keypadObj[leftPosition].row - keypadObj[num].row);
                const rightDistance = Math.abs(keypadObj[rightPosition].col - keypadObj[num].col) + Math.abs(keypadObj[rightPosition].row - keypadObj[num].row);

                if(leftDistnace > rightDistance) {
                    rightPosition = num;
                    keyPressed += 'R';
                } else if(leftDistnace < rightDistance) {
                    leftPosition = num;
                    keyPressed += 'L';
                } else {
                    if(hand === 'right') {
                        rightPosition = num;
                        keyPressed += 'R';
                    } else {
                        leftPosition = num;
                        keyPressed += 'L';
                    }
                }
                break;
        }
    });
    console.log(keyPressed);
}

solution(numbers, hand);