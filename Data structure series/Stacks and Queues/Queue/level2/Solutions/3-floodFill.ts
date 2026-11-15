// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/

/**
 * Start at the chosen pixel and use a queue to visit matching neighbors.
 * Recolor each pixel when it joins the queue so it is visited only once.
 *
 * Time and space O(rows × columns) in the worst case.
 */
export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const originalColor = image[sr][sc];
  // Recoloring to the same value would leave every visited pixel unchanged.
  if (originalColor === color) {
    return image;
  }

  const pixels: [number, number][] = [[sr, sc]];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  image[sr][sc] = color;

  for (let head = 0; head < pixels.length; head++) {
    const [row, col] = pixels[head];
    for (const [dr, dc] of directions) {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (image[nextRow]?.[nextCol] === originalColor) {
        image[nextRow][nextCol] = color;
        pixels.push([nextRow, nextCol]);
      }
    }
  }
  return image;
}

// Uncomment the example and run this file to see the output.
/*
console.log(floodFill([[1, 1, 0], [1, 0, 1]], 0, 0, 2));
// Expected [[2, 2, 0], [2, 0, 1]]
*/
