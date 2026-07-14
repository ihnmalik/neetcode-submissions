class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s: string): boolean {
    const isAlphaNumeric = /[a-zA-Z0-9]/;

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      const a = s[left];
      const b = s[right];

      if (!isAlphaNumeric.test(a)) {
        left++;
      } else if (!isAlphaNumeric.test(b)) {
        right--;
      } else if (a.toLowerCase() === b.toLowerCase()) {
        left++;
        right--;
      } else {
        return false;
      }
    }

    return true;
  }
}
