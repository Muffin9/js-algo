/**
 * @param {string} tiles
 * @return {number}
 */
// var numTilePossibilities = function(tiles) {
//     const set = new Set();
//     const visited = new Array(tiles.length).fill(false);

//     const dfs = (word) => {
//         if(set.has(word)) return;
//         else set.add(word);

//         for(let i = 0; i < tiles.length; i++) {
//             if(visited[i]) continue;
//             visited[i] = true;
//             dfs(word + tiles[i]);
//             visited[i] = false;
//         }
//     }

//     dfs('', 0);
//     return set.size - 1;
// };

var numTilePossibilities = function(tiles) {
	let map = new Map();
    const recur = (map) => {
        let sum = 0;
        for(let [key, value] of map.entries()) {
            if(value === 0) continue;
            sum += 1;
            console.log(map);
            map.set(key, map.get(key) - 1);
            sum += recur(map, sum);
            map.set(key, map.get(key) + 1);
        }
        return sum;
    }

	for(let i = 0; i < tiles.length; i++) {
		map.set(tiles[i], (map.get(tiles[i]) || 0) +  1);
	}

	const count = recur(map);
    console.log(count);
};
numTilePossibilities("AAB"); // 8 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"
// numTilePossibilities("AAABBC");