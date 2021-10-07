function removeElement(nums: number[], val: number): number {
  nums.forEach((num, i, arr) => {
    num === val && arr[i]= '_'
  });
  return nums.length;
}
