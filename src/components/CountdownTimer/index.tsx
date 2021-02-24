import React, { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, 
  Timer, 
  TimerCard, 
  NewCicleButton, 
  AbandonCicleButton, 
  FinishedCicleButton 
} from './styles';

const CountdownTimer = () => {
  const { startNewChallenge } = useContext(ChallengesContext)
  const [timer, setTimer] = useState(0.1 * 60)
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [hasCountdownFinished, setHasCountdownFinished] = useState(false)
  
  let countdownTimeout: NodeJS.Timeout

  useEffect(() => {
    if(isCountdownActive && timer > 0){
      countdownTimeout = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    } else if(isCountdownActive && timer === 0){
      setHasCountdownFinished(true)
      setIsCountdownActive(false)
    }

  }, [isCountdownActive, timer])

  const minutes = Math.floor(timer / 60)
  const seconds = timer % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const startCountdown = () => {
    setIsCountdownActive(true)
    startNewChallenge()
  }
  const stopCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsCountdownActive(false)  
    setTimer(0.1 * 60)
  }

  return (
    <Container>
      <Timer>
        <TimerCard>{minuteLeft}</TimerCard>
        <TimerCard>{minuteRight}</TimerCard>        
        <span>:</span>
        <TimerCard>{secondLeft}</TimerCard>
        <TimerCard>{secondRight}</TimerCard>        
      </Timer>
      {
        hasCountdownFinished
        ? <FinishedCicleButton disabled><span>Ciclo encerrado</span></FinishedCicleButton>
        : isCountdownActive
        ? <AbandonCicleButton onClick={stopCountdown}><span>Abandonar o ciclo</span></AbandonCicleButton>        
        : <NewCicleButton onClick={startCountdown}><span>Iniciar um ciclo</span></NewCicleButton>
      }
    </Container>
  );
}

export default CountdownTimer;