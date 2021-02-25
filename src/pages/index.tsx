import React from "react";

import Profile from "../components/Profile";
import CountdownTimer from "../components/CountdownTimer";
import ExperienceBar from "../components/ExperienceBar";
import Challenges from "../components/Challenges";

import { Container, Content } from '../styles/App'
import CountdownProvider from "../contexts/CountdownContext";

export default function Home() {
  return (
    <Container>
      <ExperienceBar /> 
      <Content>

        <CountdownProvider>
          <aside>
            <Profile />          
            <CountdownTimer />
          </aside>
          <section>
            <Challenges />
          </section>
        </CountdownProvider>
        
      </Content>
    </Container>
  )
}
