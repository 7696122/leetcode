function maxSubArray(nums: number[]): number {
  return nums.reduce((item, acc) => (acc += item));
}
