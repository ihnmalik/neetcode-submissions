class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let result = 0;
        const n = height.length;

        let l = 0,
            r = n - 1;
        let leftMax = height[l],
            rightMax = height[r];

        while (l < r) {
            if (leftMax <= rightMax) {
                l += 1;
                leftMax = Math.max(leftMax, height[l]);
                result += leftMax - height[l];
            } else {
                r -= 1;
                rightMax = Math.max(rightMax, height[r]);
                result += rightMax - height[r];
            }
        }

        return result;
    }
    // trap2(height: number[]): number {
    //     let maxLeft = 0;
    //     const n = height.length;
    //     const lefts: number[] = [0];
    //     let result = 0;

    //     for (let i = 1; i < n; i++) {
    //         lefts[i] = maxLeft;
    //         maxLeft = Math.max(maxLeft, height[i]);
    //     }

    //     const rights: number[] = [];
    //     let maxRight = height[n - 1];
    //     rights[n - 1] = 0;
    //     for (let i = n - 2; i >= 0; i--) {
    //         rights[i] = maxRight;
    //         maxRight = Math.max(maxRight, height[i]);
    //     }

    //     for (let i = 0; i < n - 1; i++) {
    //         result += Math.max(Math.min(lefts[i], rights[i]) - height[i], 0);
    //     }
    //     return result;
    // }
}
