import React, { useEffect, useRef } from "react"

/**
 * Renders an input field
 *
 * @prop {string} input the user input used to match against the current word being highlighted.
 * @prop {Boolean} isFinalWord whether it's the last word to be highlighted.
 * @prop {Array<String>} word the reference word to be highlighted.
 * @prop {Function} onChange indicates that the contents of the input have changed.
 * @prop {Function} onNextWord indicates that the user typed the word correctly and is ready to move onto the next word.
 * @prop {Function} onMatch indicates that the user successfully typed the last word.
 */
const HighlighterInput = ({ input, word, onChange, onMatch, onNextWord }) => {
  const inputEl = useRef(null)

  const handleInputChange = e => {
    const value = e.target.value
    const lastChar = value.split("").pop()

    if (value.length <= word.length) {
      onChange(value)
    }

    if (word === value) {
      onMatch()
    }

    if (lastChar === " " && word === value.slice(0, -1)) {
      onNextWord()
    }
  }

  useEffect(() => {
    inputEl.current.focus()
  })

  return (
    <input
      className={`input ${word.startsWith(input) ? "valid" : "invalid"}`}
      onChange={handleInputChange}
      placeholder="Start typing here the text above when the race begins"
      ref={inputEl}
      type="text"
      value={input}
    />
  )
}

export default HighlighterInput
