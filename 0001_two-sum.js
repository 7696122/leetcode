/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let point = -1;
  let another = -1;

  do {
    point++;
    nums.map((item, i, arr) => {
      if (i === point) return;
      if (item + arr[point] === target) {
        another = i;
      }
    });
  } while (another === -1);

  return [point, another];
};
