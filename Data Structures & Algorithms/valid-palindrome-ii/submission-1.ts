class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    validPalindrome(s: string): boolean {
        // abca
        let l = 0;
        let r = s.length - 1;
        let isDeleted = false;
        while (l <= r) {
            if (s[l] !== s[r]) {
                return this.isPalindrome(s, l + 1, r) || this.isPalindrome(s, l, r - 1);
            }
            l++;
            r--;
        }
        return true;
    }
    isPalindrome(s: string, left: number, right: number) {
        while (left <= right) {
            const a = s[left];
            const b = s[right];

            if (a === b) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    }
}
