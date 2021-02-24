import React, { useContext, useState } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, NoChallengeCard, WithChallengeCard, ChallengeFailedButton, ChallengeCompleteButton } from './styles';

const Challenges = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)  

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
            <ChallengeFailedButton onClick={resetChallenge}>Falhei</ChallengeFailedButton>
            <ChallengeCompleteButton>Completei</ChallengeCompleteButton>
          </footer>
        </WithChallengeCard>
      }
    </Container>
  );
}
 
export default Challenges;