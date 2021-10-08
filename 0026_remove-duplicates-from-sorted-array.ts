function removeDuplicates(nums: number[]): number {
  const filtered = nums.filter((item, index) => nums.indexOf(item) === index);
  nums.forEach((item, index, items) => {
    nums[index] = items[index] ? items[index] : undefined;
  });
  return filtered.length;
}
