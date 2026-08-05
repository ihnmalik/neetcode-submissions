class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        const numsToIndex: Map<number, number> = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (numsToIndex.has(nums[i])) {
                const index = numsToIndex.get(nums[i])!;
                if (Math.abs(i - index) <= k) {
                    console.log(i, index);
                    return true;
                }
                numsToIndex.delete(nums[i]);
            }

            numsToIndex.set(nums[i], i);
        }

        return false;
    }
}
