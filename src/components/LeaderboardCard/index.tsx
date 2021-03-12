import { 
  Container,
  UserRank,
  UserInfo,
  UserAvatar,
  UserDetails,
  CompletedChallenges,
} from './styles'

import { UserProps } from '../../pages/leaderboard'

interface IUser{ 
  user: UserProps;
  rank: number;
}

export default function LeaderboardCard({ user, rank }: IUser){
  return(
    <Container>
      <UserRank>{rank + 1}</UserRank>
      <UserInfo>
        <UserAvatar src="/images/avatar-placeholder.svg" alt="Avatar"/>
        <UserDetails>
          <h3>{user.name}</h3>
          <span>
            <img src="/images/up-arrow.svg" alt="ArrowUp"/>
            Level {user.level} 
          </span>
        </UserDetails>
      </UserInfo>
      <CompletedChallenges>
        <span>{user.experience}</span> completados
      </CompletedChallenges>        
    </Container>
  )
}
