function searchInsert(nums: number[], target: number): number {
  let ret = -1;
  nums.every((num, index) => {
    if (num >= target) {
      ret = index;
      return true;
    }
  });
  return ret;
}
