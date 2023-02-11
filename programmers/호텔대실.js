function solution(book_time) {
  let roomCnt = 0;
  book_time.sort();
  const rooms = [];

  book_time.forEach((room) => {
    const [v1, v2] = room[0].split(":").map(Number);
    const [v3, v4] = room[1].split(":").map(Number);
    const startTime = v1 * 60 + v2;
    const endTime = v3 * 60 + v4 + 10;

    const findIdx = rooms.findIndex((el) => el <= startTime);

    if (findIdx === -1) {
      roomCnt += 1;
      rooms.push(endTime);
    } else {
      rooms[findIdx] = endTime;
    }
  });

  return roomCnt;
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);
