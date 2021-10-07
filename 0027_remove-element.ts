function removeElement(nums: number[], val: number): number {
  return nums.map((num) => (num !== val ? "_" : num)).length;
}
