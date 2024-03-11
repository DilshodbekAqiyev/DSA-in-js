/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort(([aS, aE], [bS, bE]) => (aS !== bS ? aS - bS : aE - bE));

  let merge = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let [prevStart, prevEnd] = prev;
    let [currentStart, currentEnd] = intervals[i];

    if (prevEnd >= currentStart) {
      console.log(prev, intervals[i]);
      prev[1] = Math.max(prevEnd, currentEnd);
    } else {
      merge.push(prev);
      prev = intervals[i];
    }
  }

  merge.push(prev);
  return merge;
};

/*
var merge = function(intervals) {
  intervals = intervals.sort((a,b) => a[0] - b[0]);
  var prev = intervals[0];
  var res = [];

  for (var curr of intervals){
      if (prev[1] >= curr[0]){
          prev[1] = Math.max(prev[1], curr[1]);
      }
      else{
          res.push(curr);
          prev = curr;
      }
  }
  return res;
};
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort(([aS, aE], [bS, bE]) => (aS !== bS ? aS - bS : aE - bE));
  console.log(intervals);
  let res = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let [currentStart, currentEnd] = intervals[i];

    if (prevEnd > currentStart) {
      // console.log(prev, intervals[i])
      res++;
      prevEnd = Math.min(prevEnd, currentEnd);
    } else {
      prevEnd = currentEnd;
    }
  }

  return res;
};

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort(([aS, aE], [bS, bE]) => (aS !== bS ? aS - bS : aE - bE));

  let merge = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let [prevStart, prevEnd] = prev;
    let [currentStart, currentEnd] = intervals[i];

    if (prevEnd >= currentStart) {
      console.log(prev, intervals[i]);
      prev[1] = Math.max(prevEnd, currentEnd);
    } else {
      merge.push(prev);
      prev = intervals[i];
    }
  }
  merge.push(prev);
  return merge;
};

var mergeMeetingRooms = function (intervals) {
  intervals.sort(([aS, aE], [bS, bE]) => (aS !== bS ? aS - bS : aE - bE));

  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let [currentStart, currentEnd] = intervals[i];

    if (prevEnd >= currentStart) {
      return false;
    } else {
      prevEnd = currentEnd;
    }
  }

  return true;
};

var meetingRooms = function (intervals) {
  // intervals.sort(([aS, aE], [bS, bE]) => (aS !== bS ? aS - bS : aE - bE));
  let startTimes = [];
  let endTimes = [];

  for (let [start, end] of intervals) {
    startTimes.push(start);
    endTimes.push(end);
  }

  for (let time of [startTimes, endTimes]) {
    time.sort((a, b) => a - b);
  }

  let needRooms = 0;
  let start = 0;
  let end = 0;

  while (start < startTimes.length || end < endTimes.length) {
    if (startTimes[start] < endTimes[end]) {
      needRooms++;
      start++;
    } else {
      end++;
      start++;
    }
  }

  return needRooms;
};

const intervals = [
  [0, 10],
  [0, 5],
  [10, 20],
  [5, 10],
  [10, 20],
  // [5, 15],
];

console.log(meetingRooms(intervals));
