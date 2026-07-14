class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[], target = 0): number[][] {
    const sorted = nums.sort((a, b) => a - b);
    const result: number[][] = [];

    const jumpLeft = (left: number) => {
      const curr = sorted[left];
      let nextLeft = left + 1;
      while (nextLeft < sorted.length) {
        if (sorted[nextLeft] !== curr) return nextLeft;
        nextLeft++;
      }
      return nextLeft;
    };

    const jumpRight = (right: number, limit: number) => {
      const curr = sorted[right];
      let nextRight = right - 1;
      while (nextRight > limit) {
        if (sorted[nextRight] !== curr) return nextRight;
        nextRight--;
      }
      return nextRight;
    };

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