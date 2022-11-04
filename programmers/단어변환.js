function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    const visited = []

    const bfs = (start, cnt) => {
        const queue = [[start, cnt]];
        visited.push(start);

        while(queue.length) {
            let [str, cnt] = queue.shift();
            if(str === target) {
                console.log(cnt);
                return cnt;
            }

            words.forEach((word) => {
                let idxCount = 0;
                if(visited.includes(word)) return;

                for(let i = 0; i < word.length; i++) {
                    if(word[i] !== str[i]) idxCount += 1;
                }

                if(idxCount === 1) {
                    queue.push([word, cnt + 1]);
                    visited.push(word);
                }
            })
        }
    }

    bfs(begin, 0);
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);