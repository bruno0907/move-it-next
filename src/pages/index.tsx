import ExperienceBar from "../components/ExperienceBar";
import TimerCard from "../components/TimerCard";
import ChallengesCard from "../components/ChallengesCard";

import { Container, Content } from '../styles/App'

export default function Home() {
  return (
    <Container>
      <ExperienceBar /> 
      <Content>
        <TimerCard />
        <ChallengesCard />
      </Content>
    </Container>
  )
}
