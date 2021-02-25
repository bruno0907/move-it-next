import { createContext, ReactNode, useState } from "react";
import challenges from '../challenges.json'

interface IChallenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;  
}

interface IChallengesContextData{
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;  
  challengesCompleted: number;
  activeChallenge: IChallenge;
  setActiveChallenge: any;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface IChallengesProvider{
  children: ReactNode;
}

export const ChallengesContext = createContext({} as IChallengesContextData)

export const ChallengesProvider = ({ children }: IChallengesProvider) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)  

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)  

  const levelUp = () => setLevel(level + 1)

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
  }

  const resetChallenge = () => {    
    setActiveChallenge(null)    
  }

  const completeChallenge = () => {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()      
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider value={{ 
      level, 
      levelUp,
      currentExperience,
      experienceToNextLevel,
      challengesCompleted,
      startNewChallenge,
      resetChallenge,
      activeChallenge,
      setActiveChallenge,
      completeChallenge
    }}>
      { children }
    </ChallengesContext.Provider>  
  )
}