    const fs = require('fs');
    const input = fs.readFileSync('11650.txt').toString().trim().split("\n");

    const solution = () => {
        const N = +input.shift();
        const coordsArr = input.map(coords =>
            coords.split(' ').map(nums => parseInt(nums))
          );

        let result = '';
        coordsArr.sort((a, b) => {
            if(a[0] === b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        }).forEach(coords => {
            result += `${coords[0]} ${coords[1]}\n`;
        });

        console.log(result);
    }

    solution();