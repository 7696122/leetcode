function removeElement(nums: number[], val: number): number {
  const filtered = nums.filter((num) => num !== val);
  filtered.forEach((num, i) => {
    nums[i] = num;
  });

  return filtered.length;
}
