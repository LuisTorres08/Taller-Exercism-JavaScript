//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  const d = Math.hypot(x, y);
  return d <= 1 ? 10 : d <= 5 ? 5 : d <= 10 ? 1 : 0;
};