function removeDuplicates(nums: number[]): number {
  const unionNumbers = nums.filter(
    (item, index) => nums.indexOf(item) === index
  );
  unionNumbers.forEach((item, index, items) => {
    nums[index] = items[index] ? items[index] : undefined;
  });
  return unionNumbers.length;
}
