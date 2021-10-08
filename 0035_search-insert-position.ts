function searchInsert(nums: number[], target: number): number {
  let ret = nums.indexOf(target);
  if (ret > -1) {
    return ret;
  }

  nums.some((num, index) => {
    ret = index;
    if (num > target) {
      return true;
    }
  });
  return ret < nums.length - 1 ? ret : nums.length - 1;
}
