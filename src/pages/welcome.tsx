import { Container, Content, Header } from '../styles/Welcome'

const Welcome = () => {
  return(
    <Container>
      <Header>
        <button>Login</button>
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
  )
}

export default Welcome