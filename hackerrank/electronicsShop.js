function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let max = -1;
    
    keyboards.forEach((keyboard) => {
        drives.forEach((drive) => {
            const sumPrice = drive + keyboard;
            if(max < sumPrice && sumPrice <= b) max = sumPrice;
        })
    })
    return max;
}

getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 10);