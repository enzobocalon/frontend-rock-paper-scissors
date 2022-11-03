import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ScoreContext } from '../../context/ScoreContext'
import Paper from '../Plays/Paper'
import Rock from '../Plays/Rock'
import Scissors from '../Plays/Scissors'
import * as S from './style'

interface IProps {
  play: string | null
  setPick: React.Dispatch<React.SetStateAction<boolean>>
}

const GamePick = ({play, setPick}:IProps) => {

  const {setScore} = useContext(ScoreContext);
  const [houseChoice, setHouseChoice] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const playAgain = () => {
    setHouseChoice(null);
    setPick(false);
  }

  const handleWinner = useCallback(() => {
    if (play && houseChoice) {
      if (play === 'rock' && houseChoice === 'scissors' || 
      play === 'scissors' && houseChoice === 'paper' ||
      play === 'paper' && houseChoice === 'rock') {
        setStatus("YOU WIN")
        setScore(prev => prev+1)
      } else if (play === houseChoice) {
        setStatus("DRAW!")
      } else {
        setStatus("YOU LOSE")
      }
    }
  }, [houseChoice])

  useEffect(() => {
    const choices = ['rock', 'paper', 'scissors'];
    setTimeout(() => {
      setHouseChoice(choices[Math.floor(Math.random() * 3)]);
    }, 1000)
  }, [])

  useEffect(() => {
    handleWinner();
  }, [houseChoice])

  return (
    <S.Container>
      <S.FirstRow shouldTransition={houseChoice}>
        <h1>YOU PICKED</h1>
        <h1>THE HOUSE PICKED</h1>
      </S.FirstRow>

      <S.SecondRow shouldTransition={houseChoice}>
          {
            play === 'paper' ? <Paper /> : play === 'scissors' ? <Scissors /> : <Rock />
          }
          {
            houseChoice ? (
              <S.StatusContainer shouldTransition={houseChoice}>
              <h1>{status}</h1>
              <S.Button onClick={() => playAgain()}>PLAY AGAIN</S.Button>
            </S.StatusContainer>
            ) : ''
          }
          {
            houseChoice ? 
            houseChoice === 'paper' ? <Paper /> : houseChoice === 'scissors' ? <Scissors /> : <Rock />
            : <S.Border></S.Border>
          }
      </S.SecondRow>
    </S.Container>
  )
}

export default GamePick