function removeElement(nums: number[], val: number): number {
  nums
    .filter((num) => num !== val)
    .forEach((num, i) => {
      nums[i] = num;
    });

  return nums.length;
}
