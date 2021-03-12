import React from "react";

import Link from "next/link";
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import Profile from "../components/Profile";
import CountdownTimer from "../components/CountdownTimer";
import ExperienceBar from "../components/ExperienceBar";
import Challenges from "../components/Challenges";

import { FiHome, FiAward, FiPower } from 'react-icons/fi'

import { Container } from '../styles/App'
import { Navbar, NavOption } from '../styles/components/Navbar'

import { ChallengesProvider } from "../contexts/ChallengesContext";
import CountdownProvider from "../contexts/CountdownContext";

interface IApp{
  level: number;
  currentExperience: number;
  challengesCompleted: number;  
}

export default function App(props: IApp) {  
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}     
    >
      <Head>
        <title>Move.it | App</title>
      </Head>  

      <Container>       
        <header>
          <ExperienceBar /> 
        </header>

        <aside>
          <Navbar>            
            <img src="/images/logo-white.svg" alt="Moveit_logo" />            
            
            <ul>
              <NavOption active><FiHome size={32} /></NavOption>
              <Link href="/leaderboard">
                <NavOption><FiAward size={32} /></NavOption>          
              </Link>
            </ul>    
            <Link href="/">
              <button><FiPower size={32} /></button>
            </Link>
          </Navbar>        
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
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),         
    }
  }
}