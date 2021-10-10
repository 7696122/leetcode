function maxSubArray(nums: number[]): number {
  let ret = 0;
  nums.reduce((item, acc) => (acc += item));
  return ret;
}
