import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserWrapper = styled.div`
  display: flex;  
  align-items: center;
`

export const Avatar = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: var(--gray-line);
`

export const UserInfo = styled.div`
  margin-left: 1rem;
  
  h1{
    font-size: 1.5rem;
    color: var(--title);
    line-height: 150%;
    font-weight: 600;
  }

  div{
    display: flex;
    align-items: center;

    img{}
    
    span{
      color: var(--text);
      font-size: 1rem;
      line-height: 150%;
      margin-left: 8px;
    }
  }
`

export const UserChallenges = styled.div`
  margin-bottom: 3rem;
  padding: 8px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px var(--gray-line);

  h3{
    font-size: 1.1rem;
    color: var(--text);
    line-height: 150%;
    font-weight: 400;
  }
  span{
    font-size: 1.3rem;
    color: var(--text);
    line-height: 150%;
    font-weight: 500;
  }
`