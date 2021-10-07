function removeElement(nums: number[], val: number): number {
  const filtered = nums.filter((num) => num !== val);
  nums.forEach((num, i) => {
    nums[i] = filtered[i] ? filtered[i] : null;
  });

  return nums.length;
}
