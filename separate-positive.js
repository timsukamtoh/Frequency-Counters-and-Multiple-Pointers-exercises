"use strict";
// add whatever parameters you deem necessary & write docstring
/**
 * take an array of non zero numbers,
 * separate positive numbers to left and negative to the right
 * should return a mutated array.
 */
function separatePositive(nums) {
  let right = nums.length - 1
  let left = 0

  while (left < right) {
    console.log(nums)
    if (nums[left] < 0) {
      let temp = nums[left]
      nums.splice(left, 1)
      nums.push(temp)
    } else {
      left ++
    }

    if (nums[right] > 0) {
      let temp = nums[right]
      nums.splice(right, 1)
      nums.unshift(temp)
    } else {
      right --
    }
  }
  return nums;
}
