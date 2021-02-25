import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface ICountdownContext{
  minutes: number;
  seconds: number;
  hasCountdownFinished: boolean;
  isCountdownActive: boolean;
  startCountdown: () => void;
  stopCountdown: () => void;
}

interface ICountdownProvider{
  children: ReactNode;
}

export const CountdownContext = createContext({} as ICountdownContext)

export const CountdownProvider = ({ children }: ICountdownProvider) => {
  const { startNewChallenge, resetChallenge } = useContext(ChallengesContext)
  
  const [timer, setTimer] = useState(0.1 * 60)
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [hasCountdownFinished, setHasCountdownFinished] = useState(false)
  
  let countdownTimeout: NodeJS.Timeout

  useEffect(() => {
    if(isCountdownActive && timer > 0){
      countdownTimeout = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    } else if(isCountdownActive && timer === 0){
      setHasCountdownFinished(true)
      setIsCountdownActive(false)
    }

  }, [isCountdownActive, timer])

  const minutes = Math.floor(timer / 60)
  const seconds = timer % 60

  const startCountdown = () => {
    setIsCountdownActive(true)  
    startNewChallenge()  
  }

  const stopCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsCountdownActive(false)  
    setHasCountdownFinished(false)
    resetChallenge()
    setTimer(0.1 * 60)    
  }

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasCountdownFinished,
      isCountdownActive,
      startCountdown,
      stopCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}

export default CountdownProvider