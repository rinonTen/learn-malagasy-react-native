// A function that shuffles arrays

// Disordering the phrases array
export function shufflePhrasesArr(array) {
  let ctr = array.length;
  let temp;
  let index;
  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = array[ctr];
    array[ctr] = array[index];
    array[index] = temp;
  }
  return array;
}

export function removeDuplicateItems(arr) {
  const arrShuffled = shufflePhrasesArr(arr);
  // Remove duplicates
  return arrShuffled.filter((phrase, index) => {
    return arrShuffled.indexOf(phrase) === index;
  });
}
