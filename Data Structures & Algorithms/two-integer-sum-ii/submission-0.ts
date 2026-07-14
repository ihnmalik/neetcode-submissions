class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const a = numbers[left];
      const b = numbers[right];

      const sum = a + b;

      if (sum === target) return [left + 1, right + 1];

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return [];
  }
}
