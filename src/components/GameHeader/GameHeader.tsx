import React from 'react'
import * as S from './style'

const GameHeader = () => {
  return (
    <S.Container>
      <S.Title>
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </S.Title>
      <S.ScoreContainer>
        <S.Score>
          <h2>SCORE</h2>
          <h1>12</h1>
        </S.Score>
      </S.ScoreContainer>
    </S.Container>
  )
}

export default GameHeader