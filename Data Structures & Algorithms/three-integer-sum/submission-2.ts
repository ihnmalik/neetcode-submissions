class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[], target = 0): number[][] {
    const sorted = nums.sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i] === sorted[i - 1]) continue;

      const first = sorted[i];

      let left = i + 1;
      let right = sorted.length - 1;

      while (left < right) {
        const second = sorted[left];
        const third = sorted[right];

        const sum = first + second + third;

        if (sum === target) {
          result.push([first, second, third]);
          // Move both pointers
          left++;
          right--;

          // Skip duplicate second elements
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }

          // Skip duplicate third elements
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }

    return result;
  }
}