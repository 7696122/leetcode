function removeDuplicates(nums: number[]): number {
  const filtered = [...new Set(nums)];
  nums.forEach((num, index) => {
    nums[index] = filtered[index];
  });
  return filtered.length;
}
