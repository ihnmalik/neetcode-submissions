class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);

        let result = right;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            if (hours <= h) {
                result = Math.min(result, mid);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }
}
