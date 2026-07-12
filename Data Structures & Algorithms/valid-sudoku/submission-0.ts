class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());

        const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());

        const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cell = board[r][c];

                if (cell === ".") continue;

                const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(cell) || cols[c].has(cell) || boxes[box].has(cell)) {
                    return false;
                }

                rows[r].add(cell);
                cols[c].add(cell);
                boxes[box].add(cell);
            }
        }

        return true;
    }
}
