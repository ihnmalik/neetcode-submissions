class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        const result: string[] = [];

        let i = 0;
        let j = 0;

        while (i < word1.length || j < word2.length) {
            if (i < word1.length) {
                result.push(word1[i++]);
            }

            if (j < word2.length) {
                result.push(word2[j++]);
            }
        }

        return result.join("");
    }
}
