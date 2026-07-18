class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxArea = 0;

        // [startIndex, height]
        const stack: Array<[number, number]> = [];

        for (let i = 0; i < heights.length; i++) {
            let startIndex = i;

            while (stack.length && stack[stack.length - 1][1] > heights[i]) {
                const [index, height] = stack.pop()!;

                const width = i - index;
                const area = height * width;

                maxArea = Math.max(maxArea, area);

                // Current bar can extend as far left
                // as the popped bar started.
                startIndex = index;
            }

            stack.push([startIndex, heights[i]]);
        }

        // Remaining bars extend to the end of the histogram.
        while (stack.length) {
            const [index, height] = stack.pop()!;

            const width = heights.length - index;
            const area = height * width;

            maxArea = Math.max(maxArea, area);
        }

        return maxArea;
    }
}
