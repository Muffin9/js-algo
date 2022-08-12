
// attempts: 2회, time: 22분,
// 처음에 Printer 배열을 만들어주는 부분에서 잘못 설계하여 시간이 좀 소요된 문제. index에 location 인지 아닌지 불린형을 넣어주면 되는데 number를 넣어줘서...
function solution(priorities, location) {
    const printer = priorities.map((value, idx) => {
        const obj = {};
        obj.index = idx === location ? true : false;
        obj.value = value;
        return obj;
    });

    let count = 0;
    while(true) {
        const front = printer.shift();
        if(printer.some(p => p.value > front.value)) {
            printer.push(front);
        } else {
            count += 1;
            if(front.index) return count;
        }
    }
}

solution([2, 1, 3, 2], 2);





























//  //중요도, 요청 문서 index
//  const array = [];
//  let answer = 0;

//  priorities.map((value, index)=> {
//      array.push({
//          index: index == location ? true : false,
//          value
//      })
//  });

//  while(true) {
//      const standard = array.shift();

//      if(array.some(arr => arr.value > standard.value)) {
//          array.push(standard);
//      } else {
//          answer += 1;
//          if(standard.index) return answer;
//      }
//  }