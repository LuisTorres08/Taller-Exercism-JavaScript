//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const steps_impl = (number, counter = 0) => {
  if (number === 1) {
    return counter;
  }

  return steps_impl(number % 2 === 0 ? number / 2 : 3 * number + 1, counter + 1);
}

export const steps = number => {
  if (!isFinite(number) || number <= 0) {
    throw "Only positive numbers are allowed";
  }

  return steps_impl(number);
};
