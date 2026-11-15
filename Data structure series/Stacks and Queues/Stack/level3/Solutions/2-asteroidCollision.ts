// 735. Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/

/**
 * Keep the surviving asteroids in a stack. The incoming asteroid can
 * collide only if it moves left and the last survivor moves right.
 *
 * Time O(n) and space O(n) for n asteroids.
 */
export function asteroidCollision(asteroids: number[]): number[] {
  const survivors: number[] = [];
  for (const asteroid of asteroids) {
    let survives = true;
    while (asteroid < 0 && survivors.length > 0 && survivors.at(-1)! > 0) {
      const previous = survivors.at(-1)!;
      // Compare both sizes. Equal sizes remove the survivor and the newcomer.
      if (previous <= -asteroid) {
        survivors.pop();
      }
      if (previous >= -asteroid) {
        survives = false;
        break;
      }
    }
    if (survives) {
      survivors.push(asteroid);
    }
  }
  return survivors;
}

// Uncomment the example and run this file to see the output.
/*
console.log(asteroidCollision([10, 2, -5])); // [10]
*/
