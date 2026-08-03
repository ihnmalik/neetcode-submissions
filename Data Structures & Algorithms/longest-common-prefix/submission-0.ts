class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length === 0) return "";

        const first = strs[0];

        for (let i = 0; i < first.length; i++) {
            const ch = first[i];

            for (let j = 1; j < strs.length; j++) {
                if (i >= strs[j].length || strs[j][i] !== ch) {
                    return first.slice(0, i);
                }
            }
        }

        return first;
    }
}
