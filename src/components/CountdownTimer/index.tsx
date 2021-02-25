import React, { useContext } from 'react';

import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, 
  Timer, 
  TimerCard, 
  NewCicleButton, 
  AbandonCicleButton, 
  FinishedCicleButton 
} from './styles';

const CountdownTimer = () => {
  const { 
    minutes, 
    seconds, 
    hasCountdownFinished, 
    isCountdownActive, 
    stopCountdown, 
    startCountdown 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')  

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