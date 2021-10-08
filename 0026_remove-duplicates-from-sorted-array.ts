function removeDuplicates(nums: number[]): number {
  const filtered = [...new Set(nums)];
  nums.forEach((item, index, items) => {
    nums[index] = items[index] ? items[index] : undefined;
  });
  return filtered.length;
}
