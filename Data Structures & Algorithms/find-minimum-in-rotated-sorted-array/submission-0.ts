class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;
        let res = nums[0];

        while (left <= right) {
            if(nums[left] < nums[right]) {
                res = Math.min(nums[left], res)
                break
            }
            const mid = left + Math.floor((right - left) / 2);

            res = Math.min(nums[mid], res)
            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return res;
    }
}
