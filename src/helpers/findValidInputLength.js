/**
 * Finds the length of the valid substring of the user's input matched against a given word.
 *
 * @param {String} word the reference word
 * @param {String} input the user's input
 */
const findValidInputLength = (word, input) => {
  const inputIter = input[Symbol.iterator]()
  const wordIter = word[Symbol.iterator]()

  let length = 0
  let inputChars = inputIter.next()
  let wordChars = wordIter.next()

  while (!inputChars.done) {
    if (inputChars.value !== wordChars.value) break

    length++
    inputChars = inputIter.next()
    wordChars = wordIter.next()
  }

  return length
}

export default findValidInputLength
