import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 468px;  
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--white);
  text-align: center;
  border-radius: 5px;

  h1{
    width: 251px;
    font-size: 1.5rem;
    line-height: 140%;
  }

  div{
    margin: 64px 0 16px;
  }
  
  span{
    width: 226px;  
    line-height: 140%;  
  }
`