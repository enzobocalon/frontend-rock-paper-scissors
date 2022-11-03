import React, { useState } from 'react'
import GamePick from '../GamePick/GamePick'
import GameRules from '../GameRules/GameRules'
import Paper from '../Plays/Paper'
import Rock from '../Plays/Rock'
import Scissors from '../Plays/Scissors'
import * as S from './style'

const Game = () => {
  
  const [pick, setPick] = useState<boolean>(false);
  const [play, setPlay] = useState<string | null>(null);

  const handlePick = (choice: string) => {
    if (choice) {
      setPick(prev => !prev);
      setPlay(choice);
    }
  }

  return (
    <>
      {
        !pick ? (
          <S.Container>
          <S.FirstRow>
            <Paper onClick={() => handlePick('paper')}/>
            <Scissors onClick={() => handlePick('scissors')}/>
          </S.FirstRow>

          <S.SecondRow>
            <Rock onClick={() => handlePick('rock')} />
          </S.SecondRow>
          
          <GameRules />
        </S.Container>
        ) :
        <GamePick play={play} setPick={setPick}/>
      }
    </>
  )
}

export default Game