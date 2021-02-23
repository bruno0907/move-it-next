import Head from 'next/head'

import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
  <>    
    <GlobalStyles />
    <Head>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
      <title>Bem vindo ao Move.it</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
