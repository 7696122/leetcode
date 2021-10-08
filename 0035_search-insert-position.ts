function searchInsert(nums: number[], target: number): number {
  nums.forEach((num, index) => {
    if (num === target) return index;
  });
}
