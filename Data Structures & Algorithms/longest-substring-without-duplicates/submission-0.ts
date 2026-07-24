class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set<string>();

        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            // Shrink the window until there are no duplicates
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            // Add the current character to the window
            set.add(s[right]);

            // Update the maximum window size
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
