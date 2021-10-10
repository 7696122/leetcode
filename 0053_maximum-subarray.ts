function maxSubArray(nums: number[]): number {
  let maxEndingHere = 0,
    max_so_far = Number.MIN_VALUE,
    arr = nums;

  nums.forEach((num, i) => {
    if (num <= maxEndingHere + num) {
      maxEndingHere += num;
    } else {
      maxEndingHere = num;
    }
    if (maxEndingHere > max_so_far) {
      max_so_far = maxEndingHere;
    }
  });

  return max_so_far;
}
