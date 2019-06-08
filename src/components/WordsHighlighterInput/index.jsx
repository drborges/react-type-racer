import React, { useState } from "react"

import { Card } from "components"
import WordsHighlighter from "components/WordsHighlighter"
import HighlighterInput from "components/HighlighterInput"

import "./styles.css"

const WordsHighlighterInput = ({ finished, onFinish, sentence }) => {
  const [cursor, setCursor] = useState(0)
  const [input, setInput] = useState("")
  const words = sentence.split(" ")
  const lastWordCursor = words.length - 1

  const handleInputChange = value => {
    setInput(value)
  }

  const handleMatch = () => {
    if (cursor === lastWordCursor) {
      onFinish()
    }
  }

  const handleNextWord = () => {
    if (cursor <= lastWordCursor) {
      setCursor(cursor + 1)
    }

    setInput("")
  }

  return (
    <div className="words-highlighter-input">
      <Card>
        <WordsHighlighter
          cursor={cursor}
          input={input}
          words={words}
        />
      </Card>

      {!finished && (
        <HighlighterInput
          input={input}
          onChange={handleInputChange}
          onNextWord={handleNextWord}
          onMatch={handleMatch}
          word={words[cursor]}
        />
      )}
    </div>
  )
}

export default WordsHighlighterInput
