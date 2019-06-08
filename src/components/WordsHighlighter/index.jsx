import React from "react"

import WordHighlighter from "components/WordHighlighter"

/**
 * Renders a sentence off of a list of words, highlighting its valid and invalid portions
 * based on the provided user input and cursor that points to the current word the user's
 * input refer to.
 *
 * @param {Integer} props.cursor the index of the current active word in the sentence.
 * @param {String} props.input the user's input used as reference to highlight the current word.
 * @param {String} props.words the list of words to highlight
 */
const WordsHighlighter = ({ cursor, input, words }) => {
  const sentence = words.map((word, i) => {
    if (i < cursor) return <span key={i} className="word-valid">{word}{" "}</span>
    if (i > cursor) return <span key={i}>{" "}{word}</span>
    return <WordHighlighter key={i} word={word} input={input} />
  })

  return (
    <div className="text">{sentence}</div>
  )
}

export default WordsHighlighter
