class TimeMap {
    private keyStore: Map<string, Array<[string, number]>> = new Map();

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const innerSet = this.keyStore.get(key) ?? []
        innerSet.push([value, timestamp])

        this.keyStore.set(key, innerSet)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const values = this.keyStore.get(key) ?? [];


        let left = 0
        let right = values.length - 1
        let res = ""


        while(left <= right){
            const mid = left + Math.floor((right - left)/2)
            
            if(values[mid][1] <= timestamp){
                left = mid + 1
                res = values[mid][0]
            } else {
                right = mid - 1
            }
        }

        
        return res
    }

}
