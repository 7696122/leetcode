function maxSubArray(nums: number[]): number {
  let sum = nums.reduce((item, acc) => (acc += item));
  let j = 1;
  nums.forEach((item, i) => {
    if (i == j) return;
  });
  return;
}
