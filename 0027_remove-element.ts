function removeElement(nums: number[], val: number): number {
  const nums2 = nums;
  nums2
    .filter((num) => num !== val)
    .forEach((num, i) => {
      nums[i] = num;
    }, nums);
  // nums[0] = 2;
  // nums[1] = 2;
  return nums.length;
}
