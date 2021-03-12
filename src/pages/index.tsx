import React from "react";
import Link from 'next/link'
import Head from 'next/head'

import { Container, Content, Header } from '../styles/Home'

export default function Home() { 
  return(
    <>

    <Head>
        <title>Move.it | Seja bem-vindo</title>
    </Head>  

    <Container>
      <Header>
        <Link href="/app">
          <button>Login</button>
        </Link>
      </Header>
      <Content>
        <section>
          <img src="/images/logo-large.svg" alt=""/>
          <h1>Seja Bem-vindo</h1>
          <div>
            <p>Faça seu login para continuar ou <br />cadastre-se abaixo!</p>            
          </div>
          <form>
            <fieldset>
              <input type="email" name="email" placeholder="Digite seu melhor email"/>
              <button> Entrar </button>
            </fieldset>
          </form>
        </section>                
      </Content>
    </Container>
    
    </>
  )
}
