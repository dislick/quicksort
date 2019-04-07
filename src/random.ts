/**
 * Returns a random value between min and max inclusive.
 */
export const randomValue = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
