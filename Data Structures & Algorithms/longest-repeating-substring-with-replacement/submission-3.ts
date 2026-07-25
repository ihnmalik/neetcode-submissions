class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        const count: Map<string, number> = new Map(); // ABABBA
        let max = 0;

        for (let right = 0; right < s.length; right++) {
            count.set(s[right], 1 + (count.get(s[right]) ?? 0));


            while (((right - left + 1) - Math.max(...count.values())) > k) {
                const leftCount = count.get(s[left])!;
                count.set(s[left], leftCount - 1);
                left += 1;
            }

            max = Math.max(max, right - left + 1);
        }

        return max;
    }
}
