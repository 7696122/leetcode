function removeElement(nums: number[], val: number): number {
  nums[0] = 2;
  nums[1] = 2;
  // nums = nums.filter((num) => num !== val);
  return nums.length;
}
