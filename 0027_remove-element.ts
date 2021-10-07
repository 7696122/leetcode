function removeElement(nums: number[], val: number): number {
  const filterd = nums.filter((num) => num !== val);
  nums.forEach((num, i) => {
    nums[i] = num;
  });
  // nums[0] = 2;
  // nums[1] = 2;
  return nums.length;
}
