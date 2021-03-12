import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 96px;
  background: var(--white);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserRank = styled.div`  
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--text);
  font-weight: 500;
  border-right: solid 4px var(--background);
  padding: 0 2rem;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 2rem;
`

export const UserAvatar = styled.img`    
  height: 64px;        
  border-radius: 50%;
  margin-right: 1rem;  
  flex-shrink: 0;
` 

export const UserDetails = styled.div`
  h3{
    font-size: 1.1rem;
    color: var(--title);
    margin-bottom: 7px;
    font-weight: 600;
  }
  span{
    color: var(--text);
    font-size: 1rem;
    font-weight: 500;
      
    img{
      height: 16px;
      margin-right: 7px;
      flex-shrink: 0;
    }
  }
`

export const CompletedChallenges = styled.div`
  padding: 0 2rem;
  font-weight: 500;

  span{
    color: var(--blue);
  }
`