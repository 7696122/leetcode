function searchInsert(nums: number[], target: number): number {
  let ret = nums.indexOf(target);
  if (ret > -1) {
    return ret;
  }

  return nums.some((num, index) => {
    ret = index;
    if (num > target) {
      return true;
    }
  })
    ? ret
    : ret + 1;
}
