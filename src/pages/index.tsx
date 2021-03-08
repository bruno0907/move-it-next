import React from "react";

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import CountdownTimer from "../components/CountdownTimer";
import ExperienceBar from "../components/ExperienceBar";
import Challenges from "../components/Challenges";

import { Container } from '../styles/App'
import { ChallengesProvider } from "../contexts/ChallengesContext";
import CountdownProvider from "../contexts/CountdownContext";

interface IHome{
  level: number;
  currentExperience: number;
  challengesCompleted: number;  
}

export default function Home(props: IHome) {  
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}     
    >
      <Head>
        <title>Bem vindo ao Move.it</title>
      </Head>  

      <Container>       
        <header>
          <ExperienceBar /> 
        </header>

        <aside>
          <Sidebar />         
        </aside>      

        <CountdownProvider>
          <main>
            <Profile />          
            <CountdownTimer />
          </main>
          <section>
            <Challenges />
          </section>
        </CountdownProvider>
          
        
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, experienceToNextLevel } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),         
    }
  }
}