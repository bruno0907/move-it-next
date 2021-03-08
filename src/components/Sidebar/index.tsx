import { Container } from './styles'

const Sidebar = () => {
  return(
    <Container>
      <img src="/images/logo-white.svg" alt="Move it Logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Leaderboard</li>
        </ul>        
      </nav>
      <button>Logout</button>
    </Container>
  )
}

export default Sidebar