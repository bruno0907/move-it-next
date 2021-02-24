import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Timer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    font-size: 8rem;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);            
    display: flex;
    align-items: center;
    justify-content: center;
  }
` 
export const TimerCard = styled.span`
  width: 100%;
  font-size: 8rem;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);
  background: var(--white);  
  border: solid 2px var(--background);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;   
`

export const NewCicleButton = styled.button`  
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: var(--blue);
  transition: background 150ms;

  :hover{
    background: var(--blue-dark);
  }

  span{
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--white);
    margin-right: 8px;
  }
`
export const AbandonCicleButton = styled.button`  
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: var(--white);      
  transition: all 150ms;

  :hover{
    background: var(--red);

    span{
      color: var(--white);
    }
  }

  span{
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text);
    margin-right: 8px;
  }
`

export const FinishedCicleButton = styled.button`  
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-bottom: solid 5px var(--green);
  border-radius: 5px;
  background: var(--white);  
  transition: all 150ms;    
  cursor: not-allowed;

  span{
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text);
    margin-right: 8px;
  }
`