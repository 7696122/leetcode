function removeDuplicates(nums: number[]): number {
  nums
    .filter((item, index) => nums.indexOf(item) === index)
    .map((item, index, items) => {
      nums[index] = items[index] ? items[index] : undefined;
    });
  return nums.length;
}
