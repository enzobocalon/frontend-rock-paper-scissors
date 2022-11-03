import { useState } from 'react'
import GameContainer from './components/GameContainer/GameContainer'
import { ScoreContext } from './context/ScoreContext'
import { GlobalStyle } from './global'


function App() {
  return (
    <ScoreContext.Provider>
      <GameContainer />
      <GlobalStyle />
    </ScoreContext.Provider>
  )
}

export default App
