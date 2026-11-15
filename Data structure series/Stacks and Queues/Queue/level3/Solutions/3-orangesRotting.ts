// 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/

/**
 * Add every rotten orange to the queue at minute zero. Process one
 * batch per minute, adding freshly rotten neighbors to the next batch.
 *
 * Time and space O(rows × columns) in the worst case.
 */
export function orangesRotting(grid: number[][]): number {
  const rotten: [number, number][] = [];
  let fresh = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 2) {
        rotten.push([row, col]);
      } else if (grid[row][col] === 1) {
        fresh++;
      }
    }
  }

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let head = 0;
  let minutes = 0;
  while (head < rotten.length && fresh > 0) {
    // Oranges added during this batch only spread rot in the next minute.
    const endOfMinute = rotten.length;
    while (head < endOfMinute) {
      const [row, col] = rotten[head++];
      for (const [dr, dc] of directions) {
        const nextRow = row + dr;
        const nextCol = col + dc;
        if (grid[nextRow]?.[nextCol] === 1) {
          // Mark it before queuing it so another neighbor cannot add it again.
          grid[nextRow][nextCol] = 2;
          fresh--;
          rotten.push([nextRow, nextCol]);
        }
      }
    }
    minutes++;
  }
  return fresh === 0 ? minutes : -1;
}

// Uncomment the example and run this file to see the output.
/*
console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 4
*/
