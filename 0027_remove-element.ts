function removeElement(nums: number[], val: number): number {
  nums.forEach((num) => num !== val);
  return nums.length;
}
