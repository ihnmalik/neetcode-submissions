class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencies: Map<number, number> = new Map()

        for(const num of nums) {
            const count = frequencies.get(num) ?? 0
            frequencies.set(num, count + 1)
        }


        const buckets: number[][] = Array.from({length: nums.length + 1 }, () => [])

        for(const [num, count] of frequencies) {
            buckets[count].push(num)
        }

        const result: number[] = []

        for(let i = buckets.length - 1; i >=0; i--) {
            const bucket = buckets[i]
            for(const b of bucket) {
                result.push(b)

                if(result.length === k) {
                    return result
                }
            }
        }

        return result

        // const sorted = [...frequencies.entries()].sort((a, b) => b[1] - a[1])


        // return sorted.slice(0, k).map(([num]) => num);
    }
}
