//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let alphabet = 0;

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence.charAt(i).toLowerCase();

    if(letter >= 'a' && letter <= 'z'){
      alphabet |= 1 << (letter.charCodeAt(0) - 'a'.charCodeAt(0));

      if(alphabet == 0b11111111111111111111111111){
        return true;
      }
    } 
  }
  return false;
};
