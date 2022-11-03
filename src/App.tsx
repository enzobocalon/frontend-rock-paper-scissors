import { useState } from 'react'
import GameContainer from './components/GameContainer/GameContainer'
import { ScoreContext, ScoreProvider } from './context/ScoreContext'
import { GlobalStyle } from './global'


function App() {
  return (
    <ScoreProvider>
      <GameContainer />
      <GlobalStyle />
    </ScoreProvider>
  )
}

export default App
