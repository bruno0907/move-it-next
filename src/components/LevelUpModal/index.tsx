import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'

import { Container, Overlay } from './styles'

export const LevelUpModal = () => {
  const { level, isLevelUpModalOpen, setIsLevelUpModalOpen } = useContext(ChallengesContext)

  const handleModal = () => setIsLevelUpModalOpen(!isLevelUpModalOpen)

  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível.</p>
        <button onClick={handleModal}>
          <img src="/images/close.svg" alt="Fechar modal"/>
        </button>
      </Container>
    </Overlay>
  )
}