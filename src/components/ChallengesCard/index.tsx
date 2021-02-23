import Image from 'next/image'

import { Container } from './styles';

const ChallengesCard: React.FC = () => {
  return (
    <Container>
      <h1>Inicie um ciclo para receber desafios</h1>
      <Image 
        src="/images/level-up.svg" 
        alt="Level-up"
        width={58}
        height={80}
      />
      <span>Avance de level completando os desafios.</span>
    </Container>
  );
}

export default ChallengesCard;