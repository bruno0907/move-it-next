import styled from 'styled-components';

export const Container = styled.div`  
  height: 100%;    
  display: flex;
  align-items: center;
  justify-content: center;  
  background: var(--white);
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, .05);  
`

export const ChallengeCard = styled.div`  
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  
  h1{    
    font-size: 1.5rem;
    line-height: 140%;    
  }

  p{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    

    img{
      height: 80px;
      margin: 3rem 0 1rem;
    }

    span{     
      width: 70%; 
      line-height: 140%;  
    }
  }
  
`

export const NoChallengeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  h1{    
    font-size: 1.5rem;
    line-height: 140%;    
  }

  p{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    

    img{
      height: 80px;
      margin: 3rem 0 1rem;
    }

    span{     
      width: 70%; 
      line-height: 140%;  
    }
  }
`
export const WithChallengeCard = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header{
    width: 100%;
    border-bottom: solid 1px var(--gray-line);
    padding-bottom: 1.5rem;

    span{
      color: var(--blue);
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 150%;
    }
  }

  main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
      flex-shrink: 0;
    }
    
    h1{
      font-size: 2.5rem;
      color: var(--title);
      line-height: 150%;
      margin-top: 1rem;
    }

    p{
      margin-top: 1rem;
    }
    
  }

  footer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;    

    button{
      width: 45%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      border: none;
      border-radius: 5px;
      flex-shrink: 0;
      transition: filter 150ms;

      :hover{
        filter: brightness(.9);
      }
    }
    
  }
`;

export const ChallengeFailedButton = styled.button`
  background: var(--red);
`

export const ChallengeCompleteButton = styled.button`
  background: var(--green);  
`