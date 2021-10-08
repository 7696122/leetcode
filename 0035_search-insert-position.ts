function searchInsert(nums: number[], target: number): number {
  let ret = nums.indexOf(target);
  if (ret > -1) return ret;
  nums.every((num, index) => {
    if (num < target) {
      ret = index++;
      return true;
    }
  });
  return ret;
}
