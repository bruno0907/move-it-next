import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles'

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
  <>    
    <GlobalStyles /> 
    <Head>
      <title>Bem vindo ao Move.it</title>
    </Head>
    <ChallengesProvider>
      <Component {...pageProps} />    
    </ChallengesProvider>   
  </>
  )
}

export default MyApp
