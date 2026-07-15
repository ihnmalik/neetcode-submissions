class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

        const pairs: Record<string, string> = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (const ch of s) {
            if (ch === "(" || ch === "[" || ch === "{") {
                stack.push(ch);
            } else {
                const last = stack.pop();

                if (last !== pairs[ch]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
