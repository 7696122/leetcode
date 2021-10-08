function removeDuplicates(nums: number[]): number {
  const filtered = nums.filter((item, i) => nums.indexOf(item) === i); //[...new Set(nums)];
  nums.forEach((num, index) => {
    nums[index] = filtered[index];
  });
  return filtered.length;
}
