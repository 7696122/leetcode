function maxSubArray(nums: number[]): number {
  let max_ending_here = 0,
    max_so_far = Number.MIN_VALUE,
    arr = nums;

  nums.forEach((num, i) => {
    if (num <= max_ending_here + num) {
      max_ending_here += num;
    } else {
      max_ending_here = num;
    }
    if (max_ending_here > max_so_far) {
      max_so_far = max_ending_here;
    }
  });

  return max_so_far;
}
