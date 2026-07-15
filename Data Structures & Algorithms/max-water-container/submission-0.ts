class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let maxArea = 0

        let left = 0
        let right = heights.length - 1

        while(left < right) {
            const leftBar = heights[left]
            const rightBar = heights[right]

            const width = right - left
            const containerHeight = Math.min(leftBar, rightBar)

            const storage = containerHeight * width

            maxArea = Math.max(storage, maxArea)

            if(leftBar < rightBar) {
                left++
            }  else {
                right--
            }

        }

        return maxArea
    }
}
