/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    const arr = [deck.pop()];

    while(deck.length !== 0) {
        const maxValue = deck.pop();
        const value = arr.pop();
        arr.unshift(value);
        arr.unshift(maxValue);
    }
    return arr;
};

deckRevealedIncreasing([17,13,11,2,3,5,7]);