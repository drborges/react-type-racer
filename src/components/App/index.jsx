import React, { useState } from 'react'

import {
  Banner,
  View,
  WordsHighlighterInput,
} from "components"

const App = () => {
  const [finished, setFinished] = useState(false)

  return (
    <View align="vertical">
      <WordsHighlighterInput
        sentence={`A problem`}
        finished={finished}
        onFinish={() => setFinished(true)}
      />

      {finished && (
        <Banner variant="success">
          {`🎉🎉🎉 Congratulations! You've made it! 🎉🎉🎉`}
        </Banner>
      )}
    </View>
  );
}

export default App;
