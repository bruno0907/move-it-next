import GlobalStyles from '../styles/GlobalStyles'

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
  <>    
    <GlobalStyles />   
    <Component {...pageProps} />   
  </>
  )
}

export default MyApp
