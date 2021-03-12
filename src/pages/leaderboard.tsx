import Link from "next/link"
import Head from 'next/head'
import React, { useState } from "react"

import { FiHome, FiAward, FiPower } from "react-icons/fi"

import { Container } from "../styles/Leaderboard"
import { Navbar, NavOption } from "../styles/components/Navbar"

import LeaderboardCard from "../components/LeaderboardCard"

import UsersList from '../Users.json'
import { GetStaticProps } from "next"

export interface UserProps{
  name: string;
  level: number;
  experience: number
}

export default function Leaderboard({ UsersList }){   
  return(    
    <>

    <Head>
      <title>Move.it | Leaderboard</title>
    </Head>  

    <Container>
      <aside>
          <Navbar>
            <img src="/images/logo-white.svg" alt="Moveit_logo" />            
            <ul>
              <Link href="/app">
                <NavOption><FiHome size={32} /></NavOption>
              </Link>              
              <NavOption active><FiAward size={32} /></NavOption>          
            </ul>    
            <button><FiPower size={32} /></button>
          </Navbar>        
        </aside>
      
      <main>
        <h1>Leaderboard</h1>
        <ul>
          {
            UsersList.map((user: UserProps, index: number) => 
              <li key={index}>                  
                <LeaderboardCard user={user} rank={index}/>                
              </li>
            )
          }
        </ul>          
      </main>
    </Container>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      UsersList
    }
  }
}