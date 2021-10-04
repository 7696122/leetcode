function twoSum(nums: number[], target: number): number[] {
  let point = -1;
  let another = -1;

  do {
    point++;
    nums.forEach((item, i, arr) => {
      if (i === point) return;
      if (item + arr[point] === target) {
        another = i;
      }
    });
  } while (another === -1);

  return [point, another];
}
