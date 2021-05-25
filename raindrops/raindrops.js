//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  const pling = number % 3 ? "" : "Pling";
  const plang = number % 5 ? "" : "Plang";
  const plong = number % 7 ? "" : "Plong";

  return `${pling}${plang}${plong}` || number.toString();
};
