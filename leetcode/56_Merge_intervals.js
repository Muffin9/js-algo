/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let previous = intervals[0];
    

    for(let i = 1; i < intervals.length; i++) {
        if(previous[1] >= intervals[i][0]) {
            previous = [previous[0], Math.max(previous[1], intervals[i][1])];
        } else {
            result.push(previous);
            previous = intervals[i];
        }
    }

    if(previous) {
        result.push(previous);
    }
    console.log(previous);
    return result;
};

// merge([[2,6],[1,3],[8,10],[15,18]]);
// merge([[1,4],[4,5]]);
// merge([[1,4],[0,2],[3,5]]);
// merge([[1,3]]);
// merge([[1,4],[5,6]]);
merge([[1,4],[0,4]]);