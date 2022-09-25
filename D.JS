'use strict';
const sorabh = 2;
console.log(sorabh);

// const temperature = [1, 4, 7, 9, 13, 17, 'error', -6, -15, -9];
// const calcamplitude = function (tems) {
//   let max = tems[0];
//   for (let i = 0; i < tems.length; i++) {
//     console.log(temperature)

//     if (tems[i] > max) {
//       max = tems[i];
//     }
//   }
//   console.log(max);
// };
// calcamplitude(temperature);

const score = [200, 150, 10, 30, 264, 129, 98, 100];
//how to find max and min and how subract min from max

const calcscore = function (scored) {
  let max = scored[0];
  let min = scored[0];
  for (let i = 0; i < scored.length; i++) {
    if (scored[i] > max) {
      max = scored[i];
    }
    if (scored[i] < min) {
      min = scored[i];
    }
  }

  const scoreamplitude = max - min;
  console.log(max, min, scoreamplitude);
};
calcscore([78, 35, 90, 12, 67, 54, 89, 10]);
