class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.reduce((acc, str) => acc + `${str.length}#${str}`, "");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;
        while (i < str.length) {
            let hashIndex = i;

            while (str[hashIndex] !== "#") {
                hashIndex++;
            }

            const length = Number(str.slice(i, hashIndex));

            const decoded = str.slice(hashIndex + 1, hashIndex + length + 1);

            result.push(decoded);

            i = hashIndex + length + 1;
        }

        return result;
    }
}
