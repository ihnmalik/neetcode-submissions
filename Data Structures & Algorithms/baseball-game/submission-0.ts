class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack: number[] = [];
        let total = 0;

        for (const op of operations) {
            switch (op) {
                case "+":
                    const sum = stack[stack.length - 1] + stack[stack.length - 2];
                    stack.push(sum);
                    total += sum;
                    break;

                case "D":
                    const doubled = stack[stack.length - 1] * 2;
                    stack.push(doubled);
                    total += doubled;
                    break;

                case "C":
                    total -= stack.pop()!;
                    break;

                default:
                    const score = Number(op);
                    stack.push(score);
                    total += score;
            }
        }

        return total;
    }
}
