// attempts: 2회, time: 5분
function solution(nums) {
    const set = new Set([...nums]);
    return set.size > nums.length / 2 ? nums.length / 2 : set.size;
}

solution([3, 1, 2 ,3]);