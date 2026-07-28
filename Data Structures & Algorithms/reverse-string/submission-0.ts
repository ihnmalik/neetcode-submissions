class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */

    reverseString(s: Array<string>): void {
        let first = 0;
        let last = s.length - 1;

        while (first < last) {
            [s[first], s[last]] = [s[last], s[first]];
            first++;
            last--;
        }
    }
}
