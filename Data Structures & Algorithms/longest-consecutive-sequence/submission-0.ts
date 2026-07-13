class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    const dedup = new Set(nums);

    let longest = 0;

    for (const num of dedup) {
      const prevExists = dedup.has(num - 1);

      if (prevExists) continue;

      let current = num;
      let count = 1;
      while (dedup.has(current + 1)) {
        current = current + 1;
        count++;
      }

      longest = Math.max(longest, count);
    }

    return longest;
  }
}

console.log(new Solution().longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
