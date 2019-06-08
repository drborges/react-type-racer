import React from "react"

import { findValidInputLength } from "helpers"

/**
 * Renders the given word, highlighting its valid and invalid portions based on the
 * provided user input.
 *
 * @param {String} props.word the word to be highlighted based on the given input
 * @param {String} props.input the input used as reference to highlite the valid and invalid portions of the word
 */
const WordHighlighter = ({ word, input }) => {
  const validInputLength = findValidInputLength(word, input)
  const validInput = word.slice(0, validInputLength)
  const invalidInput = word.slice(validInputLength, input.length)
  const remainingInput = word.slice(input.length)

  return (
    <span className="current-word">
      <span className="word-valid">{validInput}</span>
      <span className="word-invalid">{invalidInput}</span>
      <span>{remainingInput}</span>
    </span>
  )
}

export default WordHighlighter
