import { useContext } from 'react';
import Image from 'next/image'

import { Container, UserWrapper, Avatar, UserInfo, UserChallenges } from './styles';
import { ChallengesContext } from '../../contexts/ChallengesContext';

const Profile: React.FC = () => {
  const { level, challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <UserWrapper>
        <Avatar>
          <img src="" alt=""/>
        </Avatar>
        <UserInfo>
          <h1>Profile Name</h1>
          <div>
            <Image src="/images/up-arrow.svg" alt="up-arrow" width={14} height={16}/>
            <span>Level {level}</span>
          </div>
        </UserInfo>
      </UserWrapper>
      <UserChallenges>
        <h3>Desafios completos</h3>
        <span>{challengesCompleted}</span>
      </UserChallenges>
    </Container>
  );
}

export default Profile;