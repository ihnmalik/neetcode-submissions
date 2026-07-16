class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    const operations: Record<string, (a: number, b: number) => number> = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => Math.trunc(a / b), // Truncate toward zero
    };

    for (const token of tokens) {
      if (token in operations) {
        const right = stack.pop()!;
        const left = stack.pop()!;
        stack.push(operations[token](left, right));
      } else {
        stack.push(Number(token));
      }
    }

    return stack[0];
  }
}
