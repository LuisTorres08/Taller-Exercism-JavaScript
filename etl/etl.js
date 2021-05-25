//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (previous) => {
  let nextBuffer = {};

  Object.entries(previous).forEach(([previousKey, previousValues]) =>
  previousValues.forEach(
    previousValue => 
    (nextBuffer[previousValue.toLowerCase()] = Number(previousKey))
    
    )

  );
  return nextBuffer;
};
