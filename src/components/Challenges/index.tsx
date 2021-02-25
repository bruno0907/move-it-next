import React, { useContext, useState } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, NoChallengeCard, WithChallengeCard, ChallengeFailedButton, ChallengeCompleteButton } from './styles';

const Challenges = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)  
  const { stopCountdown } = useContext(CountdownContext)

  const handleChallengeCompleted = () => {
    completeChallenge()
    stopCountdown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    stopCountdown()
  }

  return (
    <Container>
      { !activeChallenge 
      ? <NoChallengeCard>
          <h1>Inicie um ciclo <br/>para receber desafios</h1>
          <p>
            <img src="/images/level-up.svg" alt="Level-up"/>
            <span>Avance de nível completando os desafios.</span>
          </p> 
        </NoChallengeCard> 
      : <WithChallengeCard>
          <header>
            <span>Ganhe {activeChallenge.amount} xp</span>
          </header>
          <main>
            <img src={`/images/${activeChallenge.type}.svg`} alt="Dumbell"/>
            <h1>Exercite-se</h1>
            <p>Desafio: {activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeFailedButton onClick={handleChallengeFailed}>Falhei</ChallengeFailedButton>
            <ChallengeCompleteButton onClick={handleChallengeCompleted}>Completei</ChallengeCompleteButton>
          </footer>

        </WithChallengeCard>
      }
    </Container>
  );
}
 
export default Challenges;