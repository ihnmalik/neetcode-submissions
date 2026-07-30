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
            const a = s[l];
            const b = s[r];
            if (a === b) {
                l++;
                r--;
            } else if (!isDeleted) {
                if (this.isPalindrome(s, l + 1, r)) {
                    l++;
                    isDeleted = true;
                } else if (this.isPalindrome(s, l, r - 1)) {
                    r--;
                    isDeleted = true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
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
