function removeDuplicates(nums: number[]): number {
  let len = 0;
  nums
    .filter((item, index) => nums.indexOf(item) === index)
    .forEach((item, index, items) => {
      nums[index] = items[index] ? items[index] : undefined;
    });
}
