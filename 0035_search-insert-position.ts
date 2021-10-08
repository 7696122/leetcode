function searchInsert(nums: number[], target: number): number {
  let ret = nums.indexOf(target);
  if (ret > -1) {
    return ret;
  }

  ret = 0;
  nums.every((num, index) => {
    if (num > target) {
      ret = ++index;
      return false;
    } else {
      return false;
    }
  });
  return ret;
}
