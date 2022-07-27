const fs = require('fs');
const input = fs.readFileSync('2751.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.map(v => +v);

    function quickSort(array, l, r) {
        const pivot = array[Math.floor((l + r) / 2)];
        let left = l;
        let right = r;
      
        while (left <= right) {
          while (array[left] < pivot) left++;
          while (array[right] > pivot) right--;
      
          if (left <= right) {
            const temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
          }
        }

        if (l < right) quickSort(array, l, right);
        if (r > left) quickSort(array, left, r);
        return array;
      }
    quickSort(arr, 0, arr.length -1);
      console.log(arr.join("\n"));
}

solution();
