function removeElement(nums: number[], val: number): number {
  const filtered = nums.filter((num) => num !== val);
  filtered.forEach((num, i) => {
    nums[i] = filtered[i] ? filtered[i] : undefined;
  });

  return filtered.length;
}
