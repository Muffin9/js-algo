function solution(people, limit) {
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    let boat = 0;

    while(left <= right) {
        if(people[left] + people[right] <= limit) {
            left += 1;
            right -= 1;
        } else {
            right -=1;
        }
        boat += 1;
    }
    return boat;
}

solution([70, 50, 80, 50], 100);
solution([70, 80, 50], 100);