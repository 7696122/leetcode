function removeElement(nums: number[], val: number): number {
  nums.forEach((num, i, arr) => num === val && num = '_');
  return nums.length;
}
