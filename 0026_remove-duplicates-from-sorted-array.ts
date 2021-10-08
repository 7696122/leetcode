function removeDuplicates(nums: number[]): number {
  const filtered = [...new Set(nums)];
  nums.forEach((num, index) => {
    nums[index] = filtered[index] ? filtered[index] : undefined;
  });
  return filtered.length;
}
