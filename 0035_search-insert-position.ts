function searchInsert(nums: number[], target: number): number {
  let ret = -1;
  nums.forEach((num, index) => {
    if (num >= target) ret = index;
  });
}
