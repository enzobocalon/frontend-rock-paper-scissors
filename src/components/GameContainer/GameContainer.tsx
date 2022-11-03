import React from 'react'
import Game from '../Game/Game'
import GameHeader from '../GameHeader/GameHeader'
import * as S from './style'

const GameContainer = () => {
  return (
    <S.Container>
      <GameHeader />
      <Game />
    </S.Container>
  )
}

export default GameContainer