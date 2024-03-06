// var merge = function (intervals) {
//   intervals.sort(([aS, aE], [bS, bE]) => (aS !== bS ? aS - bS : aE - bE));

//   let prevEnd = intervals[0][1];

//   for (let i = 1; i < intervals.length; i++) {
//     const currentStart = intervals[i][0];

//     if (prevEnd >= currentStart) return false;
//   }
//   return true;
// };

// // const intervals = [
// //   [0, 30],
// //   [5, 10],
// //   [15, 20],
// // ];
// const intervals = [
//   [5, 8],
//   [9, 15],
// ];

// console.log(merge(intervals));

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
