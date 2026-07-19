class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const colLength = matrix[0].length;
        let high = colLength * matrix.length - 1;
        let low = 0;

        while (high >= low) {
            const mid = low + Math.floor((high - low) / 2);
            const row = Math.floor(mid / colLength);
            const col = mid % colLength;

            if (matrix[row][col] === target) return true;
            else if (target < matrix[row][col]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return false;
    }
}
