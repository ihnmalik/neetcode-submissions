class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const products: number[] = [];

        // First pass: store left products
        let leftProduct = 1;
        for (let i = 0; i < nums.length; i++) {
            products[i] = leftProduct;
            leftProduct *= nums[i];
        }

        // Second pass: multiply by right products
        let rightProduct = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            products[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return products;
    }
}
