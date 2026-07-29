class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length
        const result: number[] = []
        for (let i = 0; i < n; i++) {
            result[i] = nums[i]
            result[n + i] = nums[i];
        }

        return result;
    }
}
