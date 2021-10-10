function maxSubArray(nums: number[]): number {
  let sum = nums.reduce((item, acc) => (acc += item));
  let temp = 0;
  let j = 1;
  nums.forEach((item, i) => {
    if (i == j) return;
  });
  return;
}
