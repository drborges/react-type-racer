import React, { useEffect, useRef, useState } from "react"
import { Card } from "components"

import "./styles.css"

const findValidInputLength = (word, input) => {
  let length = 0
  let cursor = 0
  let done = false

  const wordLetters = word.split("")
  const inputLetters = input.split("")

  while (!done && cursor <= input.length) {
    if (wordLetters[cursor] === inputLetters[cursor]) length++
    else done = true
    cursor++
  }

  return length
}

const WordHighlighter = ({ word, input }) => {
  const length = findValidInputLength(word, input)
  const validPartition = word.slice(0, length)
  const invalidPartition = word.slice(length, input.length)
  const remainingPartition = word.slice(input.length)

  return (
    <span className="current-word">
      <span className="word-valid">{validPartition}</span>
      <span className="word-invalid">{invalidPartition}</span>
      <span>{remainingPartition}</span>
    </span>
  )
}

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

const FeedbackInput = ({ text }) => {
  const inputEl = useRef(null)
  const [cursor, setCursor] = useState(0)
  const [input, setInput] = useState("")
  const words = text.split(" ")
  const lastWordCursor = words.length - 1
  const currentWord = words[cursor]

  const handleInputChange = e => {
    const value = e.target.value
    const lastChar = value.split("").pop()

    if (value.length <= currentWord.length) {
      setInput(value)
    }

    if (cursor === lastWordCursor && currentWord === value) {
      alert("Good Job! You've made it!")
    }
    else if (lastChar === " " && currentWord === value.slice(0, -1)) {
      setCursor(cursor + 1)
      setInput("")
    }
  }

  useEffect(() => {
    inputEl.current.focus()
  })

  return (
    <div className="container">
      <Card>
        <WordsHighlighter
          cursor={cursor}
          input={input}
          words={words}
        />
      </Card>

      <div className="input-wrapper">
        <input
          className={`input ${currentWord.startsWith(input) ? "valid" : "invalid"}`}
          onChange={handleInputChange}
          placeholder="Start typing here the text above when the race begins"
          ref={inputEl}
          type="text"
          value={input}
        />
      </div>
    </div>
  )
}

export default FeedbackInput
