function removeElement(nums: number[], val: number): number {
  const filtered = nums.filter((num) => num !== val);
  filtered.forEach((num, i) => {
    nums[i] = num;
  });
  nums.splice(0, filtered.length);

  return filtered.length;
}
