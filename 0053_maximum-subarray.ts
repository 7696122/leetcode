function maxSubArray(nums: number[]): number {
  let maxEndingHere = 0,
    maxSoFar = Number.MIN_VALUE,
    arr = nums;

  nums.forEach((num, i) => {
    if (num <= maxEndingHere + num) {
      maxEndingHere += num;
    } else {
      maxEndingHere = num;
    }
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  });

  return maxSoFar;
}
